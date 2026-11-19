# Diary newsletter: Mounjaro to Kilimanjaro

Weekly email template in a diary style. Goes into `tropicgirlie/killimanjaro` once the site code is pushed there.

## Weekly flow
1. Copy `entries/example.json` to `entries/YYYY-MM-DD.json` and fill it in.
2. `node render.mjs entries/YYYY-MM-DD.json > out.html`
3. Paste `out.html` into your email tool as custom HTML (Buttondown, Kit, Beehiiv and MailerLite all accept it).

## Fields
| Field | Notes |
|---|---|
| `subject`, `preheader` | email subject + inbox preview line |
| `issueNumber`, `dateRange`, `place` | masthead |
| `headline`, `headlineHighlight` | big uppercase title; the highlight goes in a pink pill. Keep it to 2–6 words each |
| `hero {src, alt}` | collage image under the headline. Must be a hosted URL (JPG/PNG; Outlook desktop doesn't show WebP) |
| `prompt {question, starter}` | the "hit reply" tile; `null` hides it |
| `greeting`, `intro[]`, `closing[]`, `signoff` | the letter, one paragraph per item |
| `showWeight` + `weight {kg, lastWeekKg, startKg}` | set `showWeight: false` to hide the card; changes are calculated for you |
| `mood {score 1–5, emoji, word}` | dots are generated |
| `energy`, `sleepHours`, `steps`, `water`, `dose` | any one can be left out, its row disappears |
| `exercises[] {day, activity, duration, note?}` | empty list shows "A rest week. That counts too." |
| `road {done, goal, nextMilestone}` | progress bar toward the 34.5 km Roraima trek |
| `bodyNotes {tags[], text?}` | side effects, appetite, cravings; `null` hides it |
| `win`, `hard` | one line each |
| `photo {src, alt, caption}` | `null` hides it. Use a hosted image URL, not a file |
| `unsubscribeUrl` | your provider's merge tag, e.g. `{{unsubscribe_url}}` |

English only. All fixed labels live in `labels.json`.
