---
name: shopping-pmax
description: Diagnose Shopping, Performance Max, Merchant Center product feeds, product titles and A/B testing using actual Magnify evidence.
---
# Shopping and Performance Max intelligence

## 1. Get the answer through Magnify
Call `list_stores` if the workspace is not obvious. Then call `ask_magnifai` (mode `investigate`) with the full objective, for example: "Audit my Performance Max and Shopping: which products and asset groups spend without returns, which feed issues block visibility, and which product titles need work." Follow its continuation until it returns an answer, a question or a proposal. MagnifAI reads the PMax diagnostics, products, feed health, search-term signals and catalogue experiments itself.

Use direct reads such as `get_product_opportunities`, `get_catalog_summary` and `get_image_opportunities` only when the user asks for one specific report, when MagnifAI is unavailable, or when `list_stores` returns `data_mode=sample` or `sample_data=true` (synthetic demo data with no live connection). Label that output as a direct read.

## 2. Present it
- Lead with the few products, asset groups or feed issues that matter most, with their spend, revenue or ROAS from MagnifAI's evidence.
- Distinguish Shopping from PMax visibility limits, and observed facts from estimates.
- Never invent uplift, conversions or A/B winners. Call an experiment causal only when its report allows a causal claim.

## 3. Changes
Feed publication, title changes, labels, campaign changes and test launches are writes. Ask `ask_magnifai` in mode `prepare`; show the exact preview and the approval link. The owner approves in Magnify (a yes in chat is not approval); then resume `ask_magnifai` with the same request_id so it verifies the outcome.
