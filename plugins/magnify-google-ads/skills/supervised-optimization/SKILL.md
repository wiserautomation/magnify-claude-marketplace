---
name: supervised-optimization
description: Safely prepare supported Google Ads changes with a precise preview, explicit user approval and post-action verification.
---
# Supervised Google Ads optimization

## 1. Prepare the change
- **The change comes from analysis or a goal** ("fix my wasted spend", "improve this campaign"): call `ask_magnifai` with mode `prepare` and the full objective. It reads the evidence, composes the change, validates it with Google Ads and returns a proposal with a review link.
- **The user dictates one exact change** ("pause campaign X", "set the budget to 50"): call `list_google_ads_capabilities`, `describe_google_ads_capability` for the exact parameters, then `prepare_google_ads_change` with verified IDs from Magnify reads.
- **The user wants to replace an existing Search ad**: find it with `list_search_ad_resources`, read it with `get_search_ad_creative_evidence`, then call `prepare_search_ad_replacement` with the complete proposed copy. Pass its `action_parameters` unchanged to `prepare_google_ads_change`. Magnify calculates the source fingerprint on the server, so never invent one.

## 2. Approval
Show the exact preview: what changes, on which campaign, ad group or product, the expected effect, risks and how to undo it. Give the approval link. Approval happens only on the signed-in Magnify page. A "yes" in chat is never approval, so never call an execute tool because the user agreed in chat.

## 3. Execute and verify
After the owner approved in Magnify, call exactly the `execute_tool` named by the preview or by `get_action_status`, then `get_action_status` to confirm the Google Ads read-back. For an `ask_magnifai` proposal, resume `ask_magnifai` with the same request_id so it verifies the outcome. Report only the confirmed result.

If Magnify reports a blocker (no paid access, missing consent, unsafe signal health, protected learning), explain it and use `get_operator_access` for the access link. Avoid bulk or irreversible changes unless the user approved their exact scope. If the user rejects a proposal, call `cancel_prepared_action`.
