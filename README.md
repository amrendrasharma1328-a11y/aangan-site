# Aangan website (Next.js, JavaScript)

## Run local
```bash
npm install
cp .env.local.example .env.local
npm run dev        # http://localhost:3000
```

## Links change karna
`lib/config.js` (email, Instagram, YouTube). CSS: `app/globals.css`. Content: `app/page.js`.

## Emails -> Excel/Google Sheet (deploy ke liye)
1. Google Sheet banao (naam: Aangan Subscribers).
2. Extensions -> Apps Script -> `apps-script/Code.gs` ka code paste karo, `SECRET` badlo, Save.
3. Deploy -> New deployment -> type: **Web app** -> Execute as: **Me** -> Who has access: **Anyone** -> Deploy.
   Authorize karo, jo **Web app URL** mile use copy karo.
4. Vercel -> Project -> Settings -> Environment Variables:
   - `SHEET_WEBHOOK_URL` = wo URL
   - `SHEET_SECRET` = wahi secret jo Code.gs me hai
5. Redeploy. Excel chahiye to Sheet me File -> Download -> Microsoft Excel (.xlsx).

Code.gs edit karo to Deploy -> Manage deployments -> Edit -> New version karna padega (URL same rehta hai).

`SHEET_WEBHOOK_URL` khali ho to local `data/subscribers.xlsx` me save hota hai (sirf local/VPS pe).
