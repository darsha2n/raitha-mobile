# Raitha — Kannada and English mobile farm calculator

This is the free first version. It has four calculators, local phone records,
CSV export, and an installable offline web app. There are no paid packages.
Google Sheets saving is NOT connected in this mobile version. The existing
Python desktop app has a separate Sheets integration.

## Try it on your computer

Open a terminal inside this mobile folder and run:

    python -m http.server 8000

Open http://localhost:8000 in your browser. On Windows you can use
py instead of python; on other systems you may need python3.
Do not open index.html by double-clicking it: installation and offline support
require a local server or an HTTPS website.

## Publish for free with GitHub Pages

1. Create a public GitHub repository named raitha-calculator.
2. Extract the supplied ZIP on your computer. Open its mobile folder.
3. Choose Add file → Upload files in the repository.
4. Upload the CONTENTS of mobile, not the outer folder. The repository root
   must contain index.html, app.js, style.css, sw.js, manifest.webmanifest,
   icon.svg, icon-192.png, icon-512.png, .nojekyll, and this README.md.
5. Commit with the message: Build Kannada and English farm calculator.
6. Open Settings → Pages → Build and deployment.
7. Choose Deploy from a branch, branch main, folder / (root), then Save.
8. Wait until GitHub displays the published website URL in Settings → Pages.
9. Open that URL in Chrome on an Android phone. Use the three-dot menu →
   Install app or Add to Home screen.
10. Keep the first visit online so the app can download its offline files.
    Reload it once, then try airplane mode.

GitHub Pages is available for public repositories on GitHub Free, subject to
GitHub's terms and limits. A public repository makes its source code public.
No farmer records are included in the repository. Records stay in each phone's
browser. Download CSV regularly: clearing browser data removes local records.
Use the website from Pages settings rather than inventing its URL.

## What to check

- Crop profit: harvest 1000, selling price 25, seed cost 1000,
  fertiliser 2000, labour 10000, irrigation 1000, transport 2000,
  other 2000. Revenue 25000, expenses 18000, profit 7000,
  break-even price 18 per kg, break-even harvest 720 kg.
- Seeds: area 100 m², row and plant spacing 50 cm, one seedling per
  position, germination 80%. Approximately 400 positions and 500 seeds.
- Nursery: 100 plants, losses 10%, materials 600, labour 200,
  other 100, markup 20%. Saleable plants 90, unit cost 10, selling price 12.
- Markets: harvest 1000; A price 25, commission 5%, transport 1000;
  B price 24, commission 0%, transport 500. B is better by 750.
- Switch to Kannada. Inputs stay in place and results are translated.
- Save a named crop, reload, and download CSV. Kannada names are retained.

Seed requirements assume rectangular spacing and proportional germination.
Paths and boundaries can reduce actual planting positions. Seed counts are
estimates, not crop-specific recommendations. Nursery loss is rounded down
to whole saleable plants. Markup is not profit margin.

Translations are included; ask a Kannada-speaking farmer to review the wording
before a wider rollout.

## Google Sheets next

GitHub Pages hosts static files and cannot keep a Google account key secret.
Never upload credentials.json or a service-account key to this repository.
The next step is a secure backend with user access controls, using a suitable
free tier, plus an offline queue that syncs after the connection returns.
Until that is configured, this app explicitly saves only to the phone and
exports spreadsheet-compatible CSV.
