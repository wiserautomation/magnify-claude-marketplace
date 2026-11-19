---
name: value-report
description: Show what Magnify has done for one Google Ads account or a whole agency portfolio — money saved, money made, time saved and every change — and draft a client-ready monthly recap from those figures.
---
# What Magnify did for you

Use this when the user asks "what has Magnify done for me", "how much did we save", "what did Magnify make my clients this month", for a monthly recap, or for something to send to a client or a boss.

## 1. Read the figures
- One account: call `get_value_summary` with its `store_id` and the period they asked for (`this_month` by default; `last_month` for a monthly recap; `since_joined` for "so far").
- An agency or "all my clients": call `get_value_summary` without `store_id`. It covers every store this connection can access.
- If the tool is not available, call `list_stores` and say that the value summary is not enabled for this workspace yet. Do not rebuild it from other tools.

## 2. Present them honestly
- Show **Money saved**, **Money made** and **Time saved** exactly as returned, each with its label (**Estimate**) and the period. Money made comes with the extra spend that bought it (`money_made.cost_micros`): show both.
- Amounts are in micros of the store's currency (divide by 1,000,000). Never add amounts across different currencies; list them per currency.
- Show measured results as counts with their label (**Measured**): how many changes improved and how many got worse. Always include the ones that got worse.
- When `changes` is 0, say Magnify has not applied a change in that period yet. When `effects_pending` is above 0, say the money result arrives after the 7-day check. Never present a missing figure as zero.
- Never say a change "caused", "drove" or "delivered" a result. Use "Magnify estimates…" and repeat that the estimates compare each change with how the account's other campaigns moved over the same days.

## 3. For a portfolio
Rank clients by money saved plus money made within the same currency, list clients with no changes yet separately, and end with the portfolio time saved. Offer to open the Agency page with `open_magnify_view` to see every client.

## 4. A recap to send
When asked for something to send, draft a short note from these figures only: the period, the three figures with "estimate", the number of changes and how many improved or got worse. Tell the user that Magnify can email this report to their client every month from the Results page, with a link to every change, and that agencies can send it under their own name.
