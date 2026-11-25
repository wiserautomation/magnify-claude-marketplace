---
name: google-ads-audit
description: Roast, grade, audit or diagnose a connected Google Ads account in the right order (tracking and feed, then structure, bidding and products) with the fewest Magnify reads; find wasted spend, broken tracking, feed problems and the highest-impact fixes. Use for audits, roasts, "why did sales drop", "ROAS is low", "not spending", weekly or monthly reviews.
---
# Audit Google Ads with Magnify

## How to work (saves the user's Magnify allowance)
You are the analyst. Read evidence with Magnify's read tools and reason with this skill; do not hand the analysis to `ask_magnifai`. On Operator, each read draws units from a monthly allowance: `get_account_overview` 1, `resolve_ads_entities` 1, `get_performance` 2, `get_account_health` 2, `diagnose_account` 2, `diagnose_conversion_setup` 2, `diagnose_campaign_delivery` 2, `get_magnify_decisions` 2, `find_money_leaks` 3, `get_opportunities` 3, `get_magnify_ppc_plan` 3, `roast_my_ads` 3, `get_search_terms` 4. Free: `list_stores`, `show_magnify_home`, `get_business_context`, `get_value_summary`, `get_action_status`.
- Read once and reuse: never call the same read twice for the same period.
- Stop at the first broken layer (section 2). Reading search terms or products on broken tracking wastes reads and leads to wrong fixes.
- Call `ask_magnifai` only when no read tool gives the evidence or a direct read is refused for the user's plan. Prepare fixes yourself with the typed prepare tools (see supervised-optimization).

## 0. Roast requests come first
When the user asks to roast or grade their Google Ads, in any language ("Roast my Google Ads, extra hot", "Haz un roast de mi Google Ads"), call `roast_my_ads` with the spice they asked for (`mild`, `spicy` default, `extra_hot`) and `locale` `en` or `es`. Show the card, or its `markdown` where the card cannot render. Present the headline and the three lines exactly as returned: never rewrite, translate or soften them. Then show the rescue and offer to fix the first leak. "Turn up the heat" = `roast_my_ads` again with the next spice. For `syncing`, `too_fresh` or `limit_reached`, relay the returned message.

## 1. Quick audit (about 7 units)
1. `list_stores` if the workspace is not obvious (free). A workspace with `data_mode=sample` or `sample_data=true` is synthetic demo data: read it normally and do not ask the user to connect Google Ads.
2. `diagnose_conversion_setup` (2). If tracking is not verified, stop: that is finding 1 (section 2, layer 1).
3. `find_money_leaks` (3): the top 3 leaks with observed spend, why and the fix. Repeat its caveat: spend with no recorded conversions to review, never guaranteed savings. `no_data` means unknown until the first sync, not zero.
4. `diagnose_account` (2) for structure, budget limits and settings drift.
Then present (section 4). Offer the full audit only if the user wants more.

## 2. Diagnose in this order, and stop at the first broken layer
1. **Tracking.** One primary purchase conversion with value, currency and transaction id; everything else secondary with value 0 (any value there inflates product ROAS in PMax). Enhanced conversions on; consent mode in the EU. Bid on the Google Ads tag, not on imported GA4 conversions. `diagnose_conversion_setup` may return `store_sales_check`: the Google Ads vs GA4 tracking gap (`tracking_gap.pct`, alert above 15% in either direction) and MER (GA4 or owner-entered store sales / Google Ads spend), computed by Magnify with labels and period. Quote them as returned. If it says `needs_ga4` or `needs_store_sales`, tell the owner to connect Google Analytics or enter last month's store sales in Magnify (Settings → Connections); never estimate either figure. GA4 is also a site tag, not the store's backend: a gap is a reason to check the purchase tag, not proof. With tracking broken (by more than ~15%), recommend only measurement fixes.
2. **Feed and Merchant Center.** Disapprovals, GTIN coverage, shipping and tax in the feed never lower than on the site, price competitiveness. See the shopping-pmax skill.
3. **Settings drift.** Presence-only geo, Search on Google Search only, AI text, URL expansion and AI Max off, all mobile app categories excluded at account level, Google's auto-applied recommendations off, a separate brand campaign with brand excluded elsewhere.
4. **Structure.** Too many campaigns for the budget: each Smart Bidding campaign needs about 30 conversions a month. Fragmented accounts never leave learning.
5. **Bidding.** Strategy against conversion volume (see supervised-optimization).
6. **Search terms and products.** Waste, winners, heroes and villains. `get_search_terms` costs 4: read it once for a stated period.

Before recommending a target, know the economics: break-even ROAS = 1 / gross margin (after shipping, payment fees and returns); maximum CPA = average order value x margin. Without the user's margin, say the target is an assumption. With repeat purchases, a target can use yearly customer value.

## 3. Symptom trees
For "conversions dropped", "ROAS is low", "it does not spend", "CPC is rising", "lots of traffic, few sales", "PMax spends on a few products", "good ROAS but total sales flat" and "always learning", follow `references/decision-trees.md`. For a weekly or monthly review, follow `references/routine.md`.

## 4. Present it
- Start with the verdict and the numbers behind it (spend, conversions, CPA or ROAS, change vs the previous period), with the period.
- Rank fixes by money at stake, in diagnosis order: a tracking fix outranks any bid change.
- Separate observed results, data limits and recommendations. Never invent metrics or imply a report was read when a tool failed.
- Make no changes during an audit. For fixes, continue with supervised-optimization; never mix data from different workspaces.
