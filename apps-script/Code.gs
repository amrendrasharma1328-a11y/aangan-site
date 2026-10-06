// Google Sheet ke andar: Extensions -> Apps Script me ye poora paste karo.
// SECRET wahi rakho jo Vercel me SHEET_SECRET me daaloge.
const SECRET = "CHANGE_THIS_SECRET";
const SHEET_NAME = "Subscribers";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000); // parallel signups safe
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) return out({ ok: false, error: "unauthorized" });

    const email = String(data.email || "").trim().toLowerCase();
    if (!email) return out({ ok: false, error: "no email" });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["#", "Email", "Signed up at (IST)"]);
      sheet.getRange(1, 1, 1, 3).setFontWeight("bold");
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(2, 280);
      sheet.setColumnWidth(3, 190);
    }

    const last = sheet.getLastRow();
    if (last > 1) {
      const emails = sheet.getRange(2, 2, last - 1, 1).getValues().flat()
        .map(function (v) { return String(v).toLowerCase(); });
      if (emails.indexOf(email) !== -1) return out({ ok: true, added: false });
    }

    const at = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy hh:mm:ss a");
    sheet.appendRow([last, email, at]);
    return out({ ok: true, added: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
