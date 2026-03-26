# Victor Adeyimika — Portfolio

A personal portfolio website built with **React (Create React App)**.

## Stack
- React 19 (CRA / react-scripts)
- Plain CSS per component
- No external CSS framework

## Design
Modeled after the premium dark portfolio at `https://web-dev-portfolio--victoradeyimika.replit.app/`

**Color palette:**
- Background: `#0b0b0f` / `#0f0f14`
- Accent gold: `#c9a84c`
- Text primary: `#ffffff`
- Text muted: `#777` / `#999`

## Sections (in order)
1. **Header** — Fixed, transparent → frosted glass on scroll. Logo: VIC.DEV / Full Stack Developer. Nav: Home, About, Expertise, Work, Contact.
2. **Hero** (`id="home"`) — Full-viewport, bg image overlay, "// PORTFOLIO" label, headline, subtitle, View Work + Download CV buttons.
3. **About** (`id="about"`) — Avatar image, blinking cursor greeting, bio, 4 stat counters.
4. **Expertise** (`id="expertise"`) — Tabs (Frontend / Backend / Services & Tools), tech icons from SimpleIcons CDN, animated skill bars.
5. **Projects** (`id="work"`) — 4 cards (FinDash, Lumina, CollabSpace, DevFlow) with tech tags, Unsplash images, Live Demo + Source Code links.
6. **Contact** (`id="contact"`) — Left: email/location/phone/WhatsApp. Right: Name/Email/Project Brief form.
7. **Footer** — Minimal copyright line.

## Dev Server
- Port: 5000
- Command: `PORT=5000 HOST=0.0.0.0 DANGEROUSLY_DISABLE_HOST_CHECK=true npm start`
- Serves at `/myPortfolio` (due to `homepage` field in package.json)

## Deployment
- Static deployment: `npm run build` → `build/` directory
