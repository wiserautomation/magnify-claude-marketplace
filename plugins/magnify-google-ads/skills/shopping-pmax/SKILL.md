---
name: shopping-pmax
description: Diagnose and plan Shopping, Performance Max and Merchant Center for ecommerce - feed health and compliance, product titles, hero/sidekick/villain/zombie segmentation, campaign architecture by budget, PMax assets, channels and audience signals - using Magnify evidence with the fewest reads.
---
# Shopping and Performance Max

## How to work (saves the user's Magnify allowance)
You are the analyst: read with Magnify's catalogue and Ads tools and decide with this skill. Prefer whole-catalogue reads before examples: `get_catalog_summary` for counts, then `search_catalog_products` with filters, `get_product_opportunities`, `get_zombie_products`, `get_label_status`, `get_feed_health`, `get_pmax_diagnostics`. Read each once per period. If a read is refused for the user's plan, or the evidence is not covered by any tool, use `ask_magnifai` for that part only. Feed changes, titles, labels, campaigns and tests are writes: prepare them (section 5).

## 1. Feed first (the largest lever in Shopping and PMax)
- Zero disapprovals and no relevant warnings (GTIN, price, availability, images). Many disapprovals in a row can end in a suspension: fix, do not "test" Google.
- GTIN on every product (own brands buy GS1 codes): it links the product to what Google already knows and keeps history when a product returns or its title changes.
- Titles: brand + product type + key attributes (model, material, size, color, gender, quantity), with the highest-volume converting keyword in the first ~70 characters. Never contradict the landing page.
- `product_type` 3-4 levels deep, correct `google_product_category`, every optional attribute the product supports.
- Main image on white, extra lifestyle images, no watermarks. Promotions, shipping and returns set up; product ratings when there is volume.
- A supplemental feed changes titles and labels without touching the store.
- Compliance: a contact page with at least two of address, phone and email; returns, privacy, shipping and terms linked in the footer; shown payment methods only those accepted; feed shipping and tax never lower than the site; never raise a price and then "discount" it.

## 2. Segment the catalogue by data (last 90 days, adjust to volume)
| Segment | Rule | What to do |
| --- | --- | --- |
| Hero | ROAS above target and 3+ conversions | Own campaign or asset group, more budget, looser tROAS |
| Villain | Cost > 1.5x target CPA, 0 conversions | Check price, title, image, stock, landing page; then exclude or move to a strict tROAS |
| Zombie | Under 100 impressions | Fix title and image; small manual-CPC Shopping campaign to force data |
| Sidekick | Everything else | Shared campaign |

Exclude a product only after cost >= 2x target CPA or 100+ clicks with 0 conversions, and after that review. Write the segment to a custom label; other labels: margin (high/medium/low, for different tROAS), price band (cheap products cannot carry high CPCs), season or status (new, clearance, bestseller), stock. A price more than ~10% above the benchmark is a price problem no ad change fixes.

## 3. Architecture and when to use each campaign type
Pick the structure from budget and conversion volume: `references/architecture.md`. A segment gets its own campaign only when it can reach about 30 conversions a month; otherwise keep it grouped.

## 4. Running Shopping and PMax
Weekly and monthly checklists, decision trees and the PMax specifics (assets, channels, audience signals, search terms, brand exclusion): `references/shopping.md` and `references/pmax.md`.

## 5. Changes
Titles, labels, feed publication, campaigns and tests are writes. For titles use `generate_title_drafts` and `prepare_title_changes`; for a fully specified Standard Shopping campaign, `prepare_standard_shopping_campaign` (no AI cost); for multi-resource builds, `ask_magnifai` in mode `prepare`. Show the exact preview and the approval link. The owner approves in Magnify (a yes in chat is not approval). Then confirm with `get_action_status`.

## 6. Present it
Lead with the few products, segments or feed issues that matter most, with spend, revenue or ROAS and the period. Separate Shopping from PMax limits and observed facts from estimates. Never invent uplift, conversions or test winners; call an experiment causal only when its report says so.
