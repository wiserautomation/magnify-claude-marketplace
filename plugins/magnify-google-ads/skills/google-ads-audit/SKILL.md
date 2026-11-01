---
name: google-ads-audit
description: Roast, grade or audit a connected Google Ads account using real performance evidence; identify wasted spend, conversion tracking issues, and prioritized improvements.
---
# Audit Google Ads with Magnify

## 0. Roast requests come first
When the user asks to roast, grade or audit their Google Ads, in any language ("Roast my Google Ads", "Roast my Google Ads, extra hot", "Haz un roast de mi Google Ads", "Roast extra picante de mi Google Ads"), call `roast_my_ads` first with the spice they asked for (`mild`, `spicy` default, `extra_hot`) and `locale` `en` or `es` matching the conversation. Show the card; where your client cannot render it, show the returned `markdown`. Present the headline and the three lines exactly as returned: never rewrite, translate or soften them. Then show the rescue and offer to fix the first leak with `ask_magnifai` (mode `prepare`) and that leak's `fix_prompt`. "Turn up the heat" = `roast_my_ads` again with the next spice. For `syncing`, `too_fresh` or `limit_reached`, relay the returned message.

## 1. Start with the 3 money leaks
For a quick audit, or right after the user connects Magnify, call `find_money_leaks` first. Show the top 3 leaks with observed spend, clicks, why and the fix, and repeat its caveat: this is spend with no recorded conversions to review, never guaranteed savings. To fix one, call `ask_magnifai` with mode `prepare` and that leak's `fix_prompt`. If it returns `no_data`, say the leaks are unknown until the first sync finishes, not zero.

## 2. Get the full audit through Magnify
Call `list_stores` if the workspace is not obvious. Then call `ask_magnifai` (mode `investigate`) with the full objective and date window, for example: "Audit my Google Ads for the last 30 days compared with the previous 30: wasted spend, conversion tracking, budget limits and the three highest-impact fixes." Follow its continuation until it returns an answer, a question or a proposal. If MagnifAI asks a question, ask the user and pass the answer with `reply_to_magnifai`. MagnifAI reads account health, campaigns, search terms, keywords and conversion setup itself; do not rebuild that with individual tools. For a 30-day growth plan, call `get_magnify_ppc_plan`.

Use direct reads such as `get_account_overview`, `get_performance` and `get_search_terms` only when the user asks for one specific report, when MagnifAI is unavailable, or in a sample workspace, and label that output as a direct read. A workspace where `list_stores` returns `data_mode=sample` or `sample_data=true` holds synthetic demo data with no live Google Ads connection, so read it normally and do not ask the user to connect Google Ads.

## 3. Present it
- Start with the verdict and the numbers that support it (spend, conversions, CPA or ROAS, and their change).
- Rank fixes by money at stake. Separate observed results, data limitations and recommendations.
- Treat conversion actions as reliable only when MagnifAI verified them; ask about offline lead quality when it matters.
- Make no changes during an audit. If the user wants the fixes, continue with the supervised-optimization skill.

Never invent metrics, imply a report was read when a tool failed, expose tokens, or mix data from different workspaces.
