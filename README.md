# GuestSync Dashboard — Starter (Next.js + Tailwind)

This is a clean, data-dense management dashboard (Next.js + Tailwind) with mock data to deploy on Vercel.

## What this archive contains
- A minimal Next.js project (pages router)
- Tailwind CSS configured
- Components: Header, Sidebar, RequestTable (data-dense view)
- Mock data in `pages/index.js`

## Quick steps to get this live (recommended — easiest)
1. **Unzip** this archive locally.
2. Open a terminal in the unzipped folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
   Then open http://localhost:3000 to preview.
4. **To deploy on Vercel (one-click):**
   - Create a GitHub account (if you don't have one) at https://github.com.
   - Create a new repository on GitHub (empty).
   - Push this project to that repo (instructions below), OR upload the files via the GitHub website.
   - On Vercel (https://vercel.com), click **New Project** → Import Git Repository → select your new repo → Deploy.

## Push to GitHub using Git (optional, recommended)
From the project root:
```bash
git init
git add .
git commit -m "Initial GuestSync dashboard"
# create repo on GitHub (via website) and copy the repo URL, then:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

## Notes
- You will need Node.js (16.x or later) and npm installed locally to run `npm install`.
- Vercel will automatically build the app when you import the GitHub repo.
- This starter uses mock data — we can add a database and authentication next.

If you want, I can walk you through **every step live** and provide screenshots. Tell me when you're ready.
