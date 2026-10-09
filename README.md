# Raitha — Kannada and English mobile farm calculator

This is the free first version. It has four calculators, local phone records,
CSV export, and an installable offline web app. There are no paid packages.
Google Sheets saving is NOT connected in this mobile version. The existing
Python desktop app has a separate Sheets integration.

## Crop yield and profit planner update

The crop profit form now includes eight published reference profiles spanning
ragi, paddy, sunflower, maize and tomato. Select a named variety and growing
condition to see its yield range, crop duration, region, original units and
source. SOURCES.md documents the references and conversions.

No yield is filled automatically. Use the explicit lower/upper reference
buttons or enter your own expected saleable yield. Reference-bound profit
examples use your entered acreage, costs and selling price. They are not
best/worst forecasts, and no market prices are fetched or invented.
All calculations remain offline-capable. Source links require internet.
The dataset was checked on 9 October 2026 and is not updated automatically.

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
   must contain index.html, app.js, crop-profiles.js, style.css, sw.js, manifest.webmanifest,
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

## Acres and quintals update

Read OBJECTIVES.md for the objectives, assumptions and a 12-acre example.
Crop profit uses acreage under the crop, yield in quintals per acre, selling
price per quintal and costs per acre. Results separate per-acre and whole-area
figures. One quintal is 100 kg. Market comparison uses the whole harvest in
quintals and transport costs for the entire shipment.

For 12 acres, 20 quintals per acre, INR 2200 per quintal, and costs totalling
INR 14500 per acre, expect profit of INR 29500 per acre and INR 354000 total.
Uniform yield, cost and price are assumed across this crop area.

To update the existing GitHub Pages app, upload the contents of this mobile
folder to the same repository root, replacing matching files. Commit with:
Clarify per-acre farm totals and quintal units

Open the website online and reload after Pages deployment finishes to get the
updated offline files. Older phone records keep their original kg labels and
are not silently converted. The updated offline cache has a new version.

Seed requirements still use square metres and centimetres; nursery pricing
uses plant counts. Translations should be reviewed by a Kannada-speaking farmer.
There is no Google connection or server-side data collection. Local phone
records and CSV export remain optional.

