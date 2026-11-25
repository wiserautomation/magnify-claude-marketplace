---
name: supervised-optimization
description: Decide and safely prepare Google Ads changes - bidding strategy and targets, budget scaling, campaign settings - with the media-buyer rules for learning periods and step sizes, a precise preview, the owner's explicit approval in Magnify and verification after execution.
---
# Supervised Google Ads optimization

## 1. Decide before preparing (cheapest reads first)
Read only what the decision needs: `get_performance` (2 units on Operator) for the last 30 days vs the previous 30 per campaign, `diagnose_conversion_setup` (2) before any bidding change, `get_action_status` and the account's change history for the last change date. Do not hand the decision to `ask_magnifai`.

**Never optimise on broken data.** Tracking not verified: recommend the measurement fix first; meanwhile Maximize Clicks with a max CPC cap only.

**Bidding by data**
| Situation | Strategy |
| --- | --- |
| Under ~15 conversions in 30 days | Maximize Conversions (or Value) without a target; Maximize Clicks with a CPC cap if conversions are near zero |
| ~15-30 conversions, similar order values | Maximize Conversions, moving to target CPA |
| 30+ conversions, varied order values | Maximize Conversion Value, then target ROAS |
| High margin, want scale | tROAS near break-even (1 / margin) |
| Low margin | Higher tROAS to protect margin |
| New-customer or high lifetime value | tCPA or tROAS with a new-customer goal |
| Clearance | Maximize Value without a target or a very low tROAS, capped budget |

**Targets and learning**
- The first target is the actual last-30-day CPA or ROAS, never the wished one.
- Move a target 10-15% per step, then wait 7-14 days (conversion lag and learning). Do not prepare another bid change for the same campaign inside that window.
- Never change target and budget by more than 20% in the same week. Change one lever per campaign at a time: bidding, budget or structure.
- Judge a bid change after 2 weeks or 30 conversions, whichever comes first.
- Seasonality adjustments for short promotions; data exclusions for days with broken tracking.

**Budget**
- ROAS at or above target for 2 weeks and limited by budget: raise budget 15-20% every 3-7 days.
- Not spending the budget: the target is too strict; lower tROAS 10%.
- ROAS above target and not limited: lower tROAS 10% to buy volume.
- Costs rising more than 20% vs the previous period at a flat conversion rate: add or tighten a target.

**Settings** (defaults; respect the owner's explicit choice after stating the trade-off once): presence-only geo, Search on Google Search only, AI text, URL expansion and AI Max off, audience expansion off, all mobile app categories excluded at account level, Google's auto-applied recommendations off, one primary conversion, a separate brand campaign. Dynamic Search Ads only with URL rules to product and category pages.

## 2. Prepare the change
- **One exact change** ("pause campaign X", "set the target CPA to 40"): use the typed `prepare_owner_requested_*` or `prepare_*` tool when one exists, or `list_google_ads_capabilities`, `describe_google_ads_capability` and `prepare_google_ads_change`, with IDs from Magnify reads. No AI cost.
- **Replace a Search ad**: `list_search_ad_resources`, `get_search_ad_creative_evidence`, then `prepare_search_ad_replacement` with the complete copy; pass its `action_parameters` unchanged to `prepare_google_ads_change`. Magnify computes the source fingerprint: never invent one.
- **A new Search campaign**: design it yourself and call `prepare_search_campaign` (`dry_run: true` first). **Shared negative keyword lists**: `prepare_negative_keyword_lists`. **Standard Shopping**: `prepare_standard_shopping_campaign`. Any other exact multi-resource change: `request_google_ads_change_for_owner_review` when listed. When a tool answers `status: invalid` or `invalid_arguments`, fix every listed field and call it again once.
- **An expired preview**: `renew_prepared_action` with its `request_id`; never rebuild it.
- **Only when no tool covers the build** (Performance Max, Display, Demand Gen, cloning a campaign): `ask_magnifai` in mode `prepare` with the user's request in their own words, not internal tool names.

## 3. Approval
Show the exact preview: what changes, where, the expected effect, risks and how to undo it. Give the approval link. Approval happens only on the signed-in Magnify page. A "yes" in chat is never approval: never call an execute tool because the user agreed in chat.

## 4. Execute and verify
After the owner approved in Magnify, call exactly the `execute_tool` named by the preview or by `get_action_status`, then `get_action_status` to confirm the Google Ads read-back. For an `ask_magnifai` proposal, resume `ask_magnifai` with the same request_id. Report only the confirmed result.

If Magnify reports a blocker (no paid access, missing consent, unsafe signal health, protected learning), explain it and use `get_operator_access` for the access link. Avoid bulk or irreversible changes unless the user approved their exact scope. If the user rejects a proposal, call `cancel_prepared_action`.
