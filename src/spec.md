# Specification

## Summary
**Goal:** Add a Terms & Conditions page, refresh the Home hero/banner content (including a subtle featured-stories preview), and introduce dedicated Login/Signup pages that use Internet Identity authentication with redirects.

**Planned changes:**
- Add a new `/terms` route rendered within the shared SiteLayout, displaying the provided Terms & Conditions copy with clear headings/numbered sections, including “Effective Date: [Insert Date]” and the contact email link `meesamali6829@gmail.com`.
- Add navigation entry points to `/terms` from both the header (desktop/mobile) and footer “Quick Links,” matching existing navigation styling and routing patterns.
- Update the Home page hero to use the headline “Explore Amazing Stories Every Day,” add a primary CTA button “Read Stories” linking to `/stories`, and apply a light/clean background with subtle abstract/gradient treatment.
- Add a compact, subtle animated element or lightweight carousel in the Home hero that previews 2–3 featured stories from the existing featured dataset, with each item linking to its story detail page.
- Add dedicated `/login` and `/signup` routes that trigger the existing Internet Identity authentication flow and redirect appropriately after success; show an “already signed in” state when applicable; add header navigation links for Login and Signup (desktop/mobile).

**User-visible outcome:** Users can read Terms & Conditions from a dedicated page linked in navigation, see an updated Home banner with a “Read Stories” CTA and featured story previews, and authenticate via dedicated Login/Signup pages using Internet Identity with sensible redirects.
