# Design System: Make My Marriage

## 1. Visual Theme & Atmosphere

An editorial, welcoming public face for an Indian wedding-planning product. It should feel quietly premium and professionally made: warm paper, clear typography, considered whitespace, and real moments rather than decorative wedding clichés. Keep the page airy, left-led, and lightly asymmetric. Density 3/10, layout variance 5/10, motion 2/10.

The home page is a **public product marketing page**, not the signed-in organiser dashboard and not an individual couple's wedding website. It introduces Make My Marriage's practical planning tools to couples and families.

## 2. Color Palette & Roles

- **Warm Paper** (`#F5F0E8`) — primary page canvas.
- **Porcelain** (`#FCFAF6`) — quiet content surfaces and navigation.
- **Deep Umber** (`#302B26`) — primary text; use instead of pure black.
- **Warm Stone** (`#746A60`) — secondary copy, labels, and supporting information.
- **Linen Line** (`#DED6CA`) — subtle dividers and input borders.
- **Burnt Terracotta** (`#A9553D`) — the single accent for primary actions, links, and focus states. Keep it muted and use sparingly.

Use one consistent warm-neutral family across the whole page. No purple/blue neon, metallic gold UI, saturated gradients, or extra accent hues.

## 3. Typography Rules

- **Display:** Instrument Serif — expressive editorial headlines, controlled scale, and a human wedding-publication quality. Use only for marketing display text.
- **Body and navigation:** Geist — clear, professional, and comfortable for product explanations and controls.
- **Mono:** Geist Mono — only for small technical metadata when needed.
- Body copy uses relaxed leading and stays near 65 characters per line. Keep headings confident but not oversized. Serif display type does not carry into organiser dashboards or dense software UI.

## 3a. Brand Naming

- The public product name is always written **Make My Marriage**. Do not display the shorthand “MMM” in the wordmark or customer-facing page copy.
- Pair a simple standalone logo mark with the full name: mark to the left and name to its right on wider screens; stack them only when a narrow viewport requires it.

## 4. Component Styling

- **Primary action:** Burnt Terracotta fill, warm-cream text, modest corner radius, clear label, and a subtle tactile pressed state. One primary CTA per section; no neon glow.
- **Navigation:** Quiet wordmark and a small number of text links, with one clearly visible primary action.
- **Content surfaces:** Use flat surfaces and whitespace first. Add a thin warm divider or restrained border only where it improves reading order; avoid a grid of floating cards.
- **Controls:** Labels above controls; visible focus state in terracotta; errors directly below the affected control.
- **Photography:** Art-direct candid, documentary wedding photography with natural Indian skin tones, daylight, textile detail, and real family moments. Use one intentional image composition; avoid staged stock poses, AI-like faces, excessive florals, and ornamental clip art.

## 5. Layout Principles

- Use a left-aligned, asymmetrical hero: copy on one side and a documentary wedding image on the other, each in a distinct, non-overlapping zone.
- Contain the page in a centered max-width around 1,280px with generous margins and clear vertical rhythm.
- Follow the hero with a concise product explanation arranged in an asymmetric editorial layout or compact divided rows. Never use three identical feature cards.
- Keep the primary CTA visible without competing buttons. Supporting links remain visually quiet.
- Use CSS Grid for structured layouts. No percentage `calc()` hacks or absolute-positioned content stacks.

## 6. Motion & Interaction

Motion is restrained. Use short opacity and transform transitions for hover, focus, and menu changes. Respect `prefers-reduced-motion`; no perpetual animation, parallax, bouncing arrows, or choreographed entrance sequence. Interactive controls should have clear hover, focus-visible, pressed, and disabled states.

## 7. Responsive Rules

- Collapse multi-column content to one column below 768px without horizontal scrolling.
- Keep primary and navigation touch targets at least 44px tall.
- Scale display type fluidly with `clamp()` and keep body text at a readable size.
- Stack the hero image beneath the headline and copy on narrow screens; preserve the intended reading order.
- Replace desktop navigation with a simple, accessible mobile menu.
- Reduce section spacing proportionally on small screens while retaining generous breathing room.
- Design one responsive web page per deliverable, with mobile behavior specified in the same design. Do not create a separate mobile-only design unless the user asks for one.

## 8. Anti-Patterns (Banned)

- No emojis, AI copywriting clichés, or generic placeholder company names.
- No Inter, generic system serif, pure black, purple/blue neon, or glowing shadows.
- No oversaturated accents, gradients across large headings, metallic-gold controls, or ornamental Indian motifs used as decoration without purpose.
- No centered generic hero, overlapping text and imagery, three equal feature cards, floating card dashboards, or custom cursors.
- No filler such as “Scroll to explore,” bouncing chevrons, or “Elevate / Seamless / Unleash / Next-Gen” copy.
- No fake metrics or unsupported claims. Use concrete V1 capabilities: shared planning, events and tasks, guest invitations and RSVPs, vendor and expense tracking, a wedding website, and a private photo gallery.
