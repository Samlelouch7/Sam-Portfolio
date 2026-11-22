# Remote Free Deployment Guide — Sam Parmar Portfolio

This portfolio is completely static, optimized, and has **zero build steps** and **zero dependencies**. You can give anyone a live remote link in minutes without spending a penny ($0 forever).

---

## Method 1: Netlify Drop (Easiest — 30 Seconds, No Code)

1. Open [app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
2. Drag and drop this folder (`sam-parmar-portfolio`) into the upload zone.
3. Done! Netlify immediately gives you a free live remote link (e.g. `https://sam-parmar-portfolio.netlify.app`) with free SSL that you can text or send to anyone in the world.

---

## Method 2: GitHub Pages (Permanent & Official)

1. Create a free new repository on [GitHub.com](https://github.com/new) called `portfolio`.
2. In your terminal inside this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository settings, go to **Settings > Pages > Source**, and select **GitHub Actions** (the included workflow `.github/workflows/deploy.yml` will automatically build and publish).
4. Your website will be live at:
   `https://<your-username>.github.io/portfolio/`

---

## Method 3: Vercel (1-Command Instant Deploy)

From inside this folder, run:
```bash
npx vercel
```
Follow the 3 prompts (hit enter for defaults). Vercel gives you an instant permanent production URL:
`https://sam-parmar-portfolio.vercel.app`

---

## Method 4: Test & View Locally Right Now

You can open `index.html` directly in any web browser, or start a lightweight local web server:

```bash
npx serve .
# or
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.
