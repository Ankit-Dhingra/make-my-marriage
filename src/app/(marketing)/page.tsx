import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "Plan together",
    description: "One wedding space for family, events, and tasks.",
  },
  {
    number: "02",
    title: "Welcome your guests",
    description: "Digital invitations and simple, account-free RSVPs.",
  },
  {
    number: "03",
    title: "Keep the details close",
    description: "Track wedding expenses and keep vendor details together.",
  },
  {
    number: "04",
    title: "Share the celebration",
    description: "A wedding website and a private place for photos.",
  },
];

const productFeatures = [
  {
    number: "01",
    title: "A wedding, planned together",
    description:
      "Bring your closest people into one shared wedding workspace. Keep every ceremony, task, and important detail connected to the day it belongs to.",
    items: ["Wedding details & family members", "Events, timings & venues", "Shared tasks & progress"],
    note: "One shared plan for your wedding team",
  },
  {
    number: "02",
    title: "Guests without the back-and-forth",
    description:
      "Organise your guest list by event, send digital invitations, and see replies come in. Guests open a personal link and RSVP without creating an account.",
    items: ["Guest list & event invitations", "RSVPs and party size", "Email invitations & reminders", "WhatsApp link sharing"],
    note: "Guests never need to sign in",
  },
  {
    number: "03",
    title: "The people and costs behind the day",
    description:
      "Keep useful vendor details and agreed costs at hand. Discover nearby services, then record expenses already spent or committed.",
    items: ["Vendor contacts & agreed costs", "Nearby vendor discovery", "Expenses by category, event & vendor"],
    note: "A spending record, not a budgeting tool",
  },
  {
    number: "04",
    title: "A place for everyone to return to",
    description:
      "Publish a wedding website with your story and event details. After the celebration, bring photos together in a private gallery guests can contribute to.",
    items: ["Classic Indian, Minimal Elegant & Modern Celebration themes", "YouTube livestream embed", "Private event albums & guest uploads", "Gallery sharing QR code"],
    note: "Keep the memories shared privately",
  },
];

function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M20 4.5c7.6 5.1 12.1 10.2 12.1 16.2A12.1 12.1 0 0 1 20 32.8 12.1 12.1 0 0 1 7.9 20.7C7.9 14.7 12.4 9.6 20 4.5Z"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        d="M20 12.1c3.9 2.8 6.1 5.5 6.1 8.6a6.1 6.1 0 0 1-12.2 0c0-3.1 2.2-5.8 6.1-8.6Z"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <circle cx="20" cy="20.7" r="1.45" fill="currentColor" />
    </svg>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand${footer ? " brand--footer" : ""}`}
      href="#top"
      aria-label="Make My Marriage home"
    >
      <BrandMark />
      <span>Make My Marriage</span>
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.75 10h12.5M10.5 4.25 16.25 10l-5.75 5.75" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <header className="site-header">
        <div className="header-inner page-width">
          <Brand />

          <nav aria-label="Main navigation" className="desktop-nav">
            <a href="#planning">Planning</a>
            <a href="#v1-features">What’s included</a>
            <a href="#memories">Wedding memories</a>
          </nav>

          <div className="header-actions">
            <a className="login-link" href="/login">Log in</a>
            <a className="button button--small" href="#start-planning">
              Start planning
              <ArrowIcon />
            </a>
          </div>

          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span className="menu-glyph" aria-hidden="true"><i /><i /></span>
            </summary>
            <nav aria-label="Mobile navigation" className="mobile-menu-panel">
              <a href="#planning">Planning</a>
              <a href="#v1-features">What’s included</a>
              <a href="#memories">Wedding memories</a>
              <a href="/login">Log in</a>
              <a className="mobile-menu-cta" href="#start-planning">Start planning</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span />A calmer way to plan an Indian wedding</p>
          <h1 id="hero-title">
            Plan with care.
            <em>Be there for the moments.</em>
          </h1>
          <p className="hero-description">
            Bring your events, tasks, guests, and wedding expenses together—so family can
            plan as a team and spend more time celebrating.
          </p>
          <div className="hero-actions">
            <a className="button" href="#start-planning">
              Start planning
              <ArrowIcon />
            </a>
            <a className="text-link" href="#planning">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-note">
            <span className="note-rule" />
            A shared place for couples, family, and co-hosts.
          </p>
        </div>

        <figure className="hero-visual">
          <div className="hero-photo-wrap">
            <Image
              src="/make-my-marriage-hero.png"
              alt="A mother gently adjusts her daughter's dupatta at an Indian wedding"
              fill
              priority
              sizes="(max-width: 760px) 100vw, (max-width: 1200px) 48vw, 600px"
              className="hero-photo"
            />
          </div>
          <figcaption>
            <span>A day made of many moments</span>
            <span>01 — 03</span>
          </figcaption>
        </figure>
      </section>

      <section className="capability-band page-width" aria-label="What you can plan">
        {capabilities.map((capability) => (
          <article className="capability" key={capability.number}>
            <span className="capability-number">{capability.number}</span>
            <div>
              <h2>{capability.title}</h2>
              <p>{capability.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section
        id="planning"
        className="planning-section"
        aria-labelledby="planning-title"
      >
        <div className="page-width planning-inner">
          <div className="planning-intro">
            <p className="eyebrow"><span />Thoughtfully in sync</p>
            <h2 id="planning-title">One clear place for every moving part.</h2>
            <p>
              From the first guest list to the final Vidaai, keep the details
              close and the people involved on the same page.
            </p>
            <a className="text-link text-link--arrow" href="#guest-experience">
              Explore shared planning <ArrowIcon />
            </a>
          </div>

          <div className="planning-preview" aria-label="Example wedding planning view">
            <div className="preview-topline">
              <div>
                <span className="preview-kicker">WEDDING WEEKEND</span>
                <h3>Three days, together</h3>
              </div>
              <span className="preview-status"><i />Planning view</span>
            </div>

            <div className="preview-content">
              <section className="schedule" aria-labelledby="schedule-title">
                <div className="preview-section-heading">
                  <h4 id="schedule-title">Event schedule</h4>
                  <span>DAY ONE</span>
                </div>
                <article className="schedule-event">
                  <time>4:30 PM</time>
                  <div className="event-marker"><i /></div>
                  <div className="event-copy">
                    <h5>Mehendi</h5>
                    <p>Courtyard · Setup from 2:00 PM</p>
                  </div>
                  <span className="event-state">Confirmed</span>
                </article>
                <article className="schedule-event">
                  <time>7:30 PM</time>
                  <div className="event-marker event-marker--muted"><i /></div>
                  <div className="event-copy">
                    <h5>Sangeet</h5>
                    <p>Grand hall · Sound check at 5:00 PM</p>
                  </div>
                  <span className="event-state event-state--quiet">In progress</span>
                </article>
                <div className="schedule-footnote">
                  <span className="tiny-check" aria-hidden="true">✓</span>
                  Shared tasks stay alongside each event
                </div>
              </section>

              <section className="guest-list" id="guest-experience" aria-labelledby="guest-title">
                <div className="preview-section-heading">
                  <h4 id="guest-title">Guest replies</h4>
                  <a href="#guest-experience" aria-label="View guest replies">View all</a>
                </div>
                <div className="guest-row">
                  <span className="guest-avatar guest-avatar--rose">A</span>
                  <span className="guest-name">Aarav & family</span>
                  <span className="reply reply--yes"><i />Attending</span>
                </div>
                <div className="guest-row">
                  <span className="guest-avatar guest-avatar--sage">M</span>
                  <span className="guest-name">Meera's family</span>
                  <span className="reply reply--pending"><i />Awaiting reply</span>
                </div>
                <div className="guest-row">
                  <span className="guest-avatar guest-avatar--sand">R</span>
                  <span className="guest-name">Rohan & family</span>
                  <span className="reply reply--yes"><i />Attending</span>
                </div>
                <p className="guest-note">Invitations and replies, kept with the plan.</p>
              </section>
            </div>
            <div className="preview-footer">
              <span><i /> Changes shared with your planning circle</span>
              <span>MAKE MY MARRIAGE</span>
            </div>
          </div>
        </div>
      </section>

      <section id="v1-features" className="features-section" aria-labelledby="features-title">
        <div className="page-width">
          <div className="features-heading">
            <div>
              <p className="eyebrow"><span />Made for the whole wedding journey</p>
              <h2 id="features-title">Everything your family needs,<br /><em>in one thoughtful place.</em></h2>
            </div>
            <p>
              From the first shared plan to the last photos, Make My Marriage brings the practical parts of an Indian wedding together without adding more to keep track of.
            </p>
          </div>

          <div className="feature-grid">
            {productFeatures.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-topline">
                  <span className="feature-number">{feature.number}</span>
                  <span className="feature-rule" />
                  <span className="feature-label">MAKE IT YOURS</span>
                </div>
                <h3>{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul>
                  {feature.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p className="feature-note"><span />{feature.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="memories" className="closing-section page-width">
        <div className="closing-rule" />
        <div className="closing-copy">
          <p className="eyebrow"><span />Made for the way we celebrate</p>
          <h2>Keep the planning clear.<br /><em>Keep the day yours.</em></h2>
        </div>
        <a id="start-planning" className="button" href="/signup">
          Start planning
          <ArrowIcon />
        </a>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <div className="footer-brand-block">
            <Brand footer />
            <p>A little more room for the moments that matter.</p>
          </div>
          <nav aria-label="Footer navigation" className="footer-nav">
            <a href="#planning">Planning</a>
            <a href="#v1-features">What’s included</a>
            <a href="#memories">Wedding memories</a>
            <a href="/login">Log in</a>
          </nav>
          <p className="copyright">© 2026 Make My Marriage</p>
        </div>
      </footer>
    </main>
  );
}
