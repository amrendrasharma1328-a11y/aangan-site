import ExcelJS from "exceljs";
import fs from "fs/promises";
import path from "path";

export const DATA_DIR = path.join(process.cwd(), "data");
export const EXCEL_FILE = path.join(DATA_DIR, "subscribers.xlsx");
const SHEET = "Subscribers";

/* ------------------------------------------------------------------ */
/* Mode 1 (deploy / Vercel): Google Sheet via Apps Script webhook      */
/* ------------------------------------------------------------------ */
async function addToGoogleSheet(email) {
  const res = await fetch(process.env.SHEET_WEBHOOK_URL, {
    method: "POST",
    redirect: "follow",
    // text/plain => Apps Script pe CORS/preflight ka jhanjhat nahi
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ email, secret: process.env.SHEET_SECRET }),
    cache: "no-store",
  });

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error("Sheet webhook ne JSON nahi diya (deployment 'Anyone' access pe hai? URL sahi hai?)");
  }
  if (!data.ok) throw new Error(`Sheet webhook error: ${data.error || "unknown"}`);
  return { added: data.added !== false };
}

/* ------------------------------------------------------------------ */
/* Mode 2 (local / VPS): data/subscribers.xlsx                         */
/* ------------------------------------------------------------------ */
let queue = Promise.resolve();
function enqueue(task) {
  const run = queue.then(task, task);
  queue = run.catch(() => {});
  return run;
}

async function loadWorkbook() {
  const wb = new ExcelJS.Workbook();
  let exists = true;
  try {
    await fs.access(EXCEL_FILE);
  } catch {
    exists = false;
  }
  if (exists) await wb.xlsx.readFile(EXCEL_FILE); // fail ho to throw — kabhi overwrite nahi
  let ws = wb.getWorksheet(SHEET);
  if (!ws) {
    ws = wb.addWorksheet(SHEET);
    ws.columns = [
      { header: "#", key: "n", width: 6 },
      { header: "Email", key: "email", width: 40 },
      { header: "Signed up at (IST)", key: "at", width: 26 },
    ];
    ws.getRow(1).font = { bold: true };
    ws.views = [{ state: "frozen", ySplit: 1 }];
  }
  return { wb, ws };
}

function addToLocalExcel(email) {
  return enqueue(async () => {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const { wb, ws } = await loadWorkbook();

    let exists = false;
    ws.eachRow((row, i) => {
      if (i > 1 && String(row.getCell(2).value).toLowerCase() === email) exists = true;
    });
    if (exists) return { added: false };

    const n = ws.rowCount;
    const at = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    ws.addRow([n, email, at]);

    const tmp = EXCEL_FILE + ".tmp";
    await wb.xlsx.writeFile(tmp);
    await fs.rename(tmp, EXCEL_FILE);
    return { added: true };
  });
}

/** Email save karta hai. Returns { added } (duplicate ho to added=false). */
export async function addSubscriber(email) {
  if (process.env.SHEET_WEBHOOK_URL) return addToGoogleSheet(email);

  if (process.env.VERCEL || process.env.NETLIFY) {
    throw new Error("SHEET_WEBHOOK_URL set nahi hai — serverless pe local Excel file save nahi hoti.");
  }
  return addToLocalExcel(email);
}
