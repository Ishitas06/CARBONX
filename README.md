AI‑Powered Multi‑Modal Carbon Credit Verification (Frontend Demo)

1) Overview

CarbonSherlock is a single‑page demo that simulates how an AI system might verify carbon‑credit projects by combining multiple signals: satellite cues, on‑site reports, documents, community inputs, and blockchain receipts.This is not a production tool—data is randomized for demonstration.

2) Key Features

Project Verification Form — Enter project name, claimed trees, and claimed carbon.

Top Metrics — Active projects, verified today, detected fraud, satellites online.

Project Details Cards — Location, forest stats, environmental impact.

Satellite Panel — Before/after placeholders for imagery.

Blockchain Panel — Fake hash + timestamp for immutable proof simulation.

Activity Feed — Real‑time logs for each verification step.

Verification Summary — Badge (✅ Verified / ⚠️ Suspect / ❌ Fraud Risk) + confidence.

Risk Radar — Chart.js radar showing risk across modalities.

3) Tech Stack

HTML + TailwindCSS (via CDN) for UI

Chart.js for the radar chart

Vanilla JavaScript for demo logic

4) How to Run

Download or clone the repository.

Open index.html in any modern browser (Chrome/Edge/Firefox).

Type a project name + numbers for Claimed Trees and Claimed Carbon.

Click Verify Project with AI and watch the dashboard update.

No build step is required—everything loads from CDNs.

5) How It Works (Demo Logic)

Randomization Helpers: randInt(a,b) returns random integers; makeFakeHash() creates a 64‑char hex string; timeNowISO() prints a UTC timestamp.

Verification Flow (verifyProject()):

Reads inputs and fills the detail cards.

Computes Verified Trees as a random % of Claim.

Derives Verification Rate and a rough Carbon Stored (≈ verifiedTrees * 0.02 t CO₂).

Produces a score (0–100). Higher score → more likely Verified.

Maps score to badge: >60 ✅ Verified, 31–60 ⚠️ Suspect, ≤30 ❌ Fraud Risk.

Updates the radar chart with per‑modality risk estimates (lower = safer in this demo).

Appends step‑by‑step entries to the Activity Feed.

Generates a fake blockchain hash + verification time.

All numbers are illustrative; replace with your own models/APIs for real use.

6) Customization Tips

Styling: Tweak Tailwind utility classes (colors, spacing, rounded corners). The .glass CSS provides a soft glassmorphism effect.

Chart: Edit riskChart.data.labels or the dataset to match real modalities.

Scoring: Replace the score heuristic with a real model output (e.g., 0–1 probability).

Images: Swap the two Satellite Analysis placeholders with real before/after images.

Data: Pipe verified values from APIs instead of randoms.

7) Integrations (when you go beyond demo)

Satellite: Plug in imagery or vegetation indices (e.g., NDVI) from a geospatial API.

Documents: Ingest PDF reports and run OCR/NLP for claim extraction.

Community: Add survey/field app data for ground truth.

Blockchain: Replace makeFakeHash() with real transaction hashes after writing receipts to a chain.

Ensure consent and privacy compliance when handling field/community data.

8) Known Limitations

Numbers are randomized; not scientifically accurate.

No backend or database—state is in the browser only.

No authentication, roles, or access control.

Risk meanings are simplified for education.

9) Next Steps

Replace demo randoms with real data sources.

Add a backend for persistence + audit history.

Implement user auth + roles (verifier, reviewer, admin).

Export receipts (PDF) and shareable links.
