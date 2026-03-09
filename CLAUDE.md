# Portfolio Website — Project Instructions

## Golden Rule
When unsure about ANYTHING — ask Andrew. Do not assume. Do not guess.

## Project Overview
Single-viewport developer portfolio for Andrew Robalino Garcia. Matte black terminal + manga aesthetic. The terminal IS the site.

## Stack
- Next.js (SSG)
- Tailwind CSS
- Framer Motion
- Custom SVG/CSS/canvas for slash animation
- Deployed on Vercel

## Design Doc
Full design: `docs/plans/2026-03-09-portfolio-design.md`

## Layout
- Single viewport, no scroll (desktop)
- 60/40 split: interactive terminal (left) / manga photo panels (right)
- Pure matte black background, white accents, gray borders
- Red accent ONLY for slash trail — no other color unless Andrew approves
- No footer

## Top Nav
- Left: "Andrew Robalino Garcia"
- Right: GitHub, LinkedIn, Email, Instagram (handle TBD) icons

## Terminal (Left 60%)
- Full chrome (dots, title bar: `andrew@portfolio:~$`)
- Monospace font (JetBrains Mono or Fira Code)
- On load types: `$ whoami` → name + rotating identity word
- Horizontal nav buttons: `[ about_me ] [ projects ] [ resume ] [ contact ]`
- Clicking a button clears previous content and types new content
- Blinking cursor always visible

## Terminal Content

### about_me
Bio: Charlotte NC born, Miami FL based, FIU CS major (Dec 2026 grad), design + frontend passion, problem solver, soccer (Man City), travel, lived in Ecuador 4 years, Hispanic pride, full send on dev.

### projects
One-at-a-time with next/prev. Each shows screenshot + description.
- Miami-TandM `[LIVE]` — React + Tailwind marketing site for family tax business
- Draft-Lab `[LIVE]` — Brawl Stars drafting tool with World Finals data
- Portfolio `[LIVE]` — ERROR GLITCH EASTER EGG (red error text, punchline: "you're looking at it"), NO screenshot
- Special-Question `[CLASSIFIED]` — personal, no demo link
- 8-Puzzle Solver `[LIVE TEST]` — interactive demo in terminal
- Restaurant Manager `[LIVE TEST]` — interactive demo in terminal
- Fuel Log Parser `[LIVE TEST]` — interactive demo in terminal

### resume
PDF preview + download button. Placeholder until Andrew provides real resume.

### contact
Email (andrewrobalino1@gmail.com), GitHub (AndrewRobalino), LinkedIn, Instagram (TBD). Icons + links.

## Photo Panels (Right 40%)
- 3 manga-panel style photos with sharp borders and manga gutters
- Main: city bridge (largest panel, full face + body)
- Secondary: subway stairs
- Tertiary: torii gates (needs desaturation — too red/bright)

## Slash Animation
- Line-art manga character pops from between photo panels
- Slashes rotating word in terminal, red slash trail
- Fast action (<1s), 5-7s pause between repeats
- Fallback: shadow silhouette if line-art too complex
- Future idea: character disappears into terminal like a virus

## Mobile
- Back burner. Desktop first.
- Fallback: Option B — terminal hub that scrolls to dedicated sections

## Assets Status
- Photos: 3 provided (torii gates needs color treatment)
- Slash character SVG: needs to be created
- Resume PDF: placeholder, Andrew will provide
- Project screenshots: need to capture from live sites
- Instagram handle: TBD

## Workflow
- Andrew decides when to commit and deploy
- Ask before any destructive or irreversible actions
- When unsure — ASK, don't assume
- Write code like a senior dev — clean, maintainable, no shortcuts
