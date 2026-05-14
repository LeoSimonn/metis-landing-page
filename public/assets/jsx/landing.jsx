/* Metis — Landing Page sections */

const { useState: lpUseState, useEffect: lpUseEffect } = React;

/* ---------- App store badges ---------- */
function StoreButtons() {
  const { t } = useI18n();
  return (
    <div className="store-row">
      <a className="store-btn" href="#">
        <svg width="22" height="26" viewBox="0 0 24 28" fill="currentColor" aria-hidden="true">
          <path d="M17.05 14.42c-.02-2.62 2.14-3.88 2.24-3.94-1.22-1.78-3.12-2.02-3.8-2.06-1.62-.16-3.16.96-3.98.96-.84 0-2.1-.94-3.46-.92-1.78.02-3.42 1.04-4.34 2.64-1.86 3.22-.48 7.96 1.32 10.56.88 1.28 1.92 2.7 3.28 2.66 1.32-.06 1.82-.84 3.42-.84 1.58 0 2.04.84 3.44.82 1.42-.02 2.32-1.3 3.18-2.58.34-.52.86-1.42 1.16-2.12.32-.74.66-1.5.66-2.36 0-.04-2.16-.84-2.14-3.42zM14.74 5.94c.74-.86 1.22-2.06 1.08-3.26-1.04.04-2.3.68-3.06 1.54-.68.76-1.28 1.96-1.12 3.14 1.16.1 2.36-.58 3.1-1.42z"/>
        </svg>
        <span className="label-row">
          <span className="small">{t("hero.store.appstore.small")}</span>
          <span className="big">{t("hero.store.appstore.big")}</span>
        </span>
      </a>
      <a className="store-btn" href="#">
        <svg width="22" height="24" viewBox="0 0 24 26" fill="currentColor" aria-hidden="true">
          <path d="M3.18 1.34c-.34.36-.54.92-.54 1.66v20c0 .74.2 1.3.56 1.66l.08.06L14.5 13.4v-.26L3.26 1.28l-.08.06zM18.24 17.14l-3.74-3.74v-.26l3.74-3.74.08.04 4.42 2.52c1.26.72 1.26 1.9 0 2.62l-4.42 2.5-.08.06zM18.32 17.08L14.5 13.26 3.18 24.58c.42.44 1.1.5 1.88.06l13.26-7.56M18.32 8.92L5.06 1.36c-.78-.46-1.46-.4-1.88.06l11.32 11.32 3.82-3.82z"/>
        </svg>
        <span className="label-row">
          <span className="small">{t("hero.store.play.small")}</span>
          <span className="big">{t("hero.store.play.big")}</span>
        </span>
      </a>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero({ headlineOverride, showHero }) {
  const { t } = useI18n();
  if (!showHero) return null;

  const title1 = headlineOverride?.l1 ?? t("hero.title.1");
  const title2 = headlineOverride?.l2 ?? t("hero.title.2");
  const title3 = headlineOverride?.l3 ?? t("hero.title.3");

  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="wrap hero-inner">
        <div className="hero-left">
          <span className="badge"><span className="dot"></span>{t("badge.version")}</span>
          <h1 className="hero-title">
            <span className="line">{title1}</span>
            <span className="line"><em>{title2}</em></span>
            <span className="line">{title3}</span>
          </h1>
          <p className="hero-body lede">{t("hero.body")}</p>
          <StoreButtons />
          <p className="hero-note mono">{t("hero.note")}</p>
        </div>
        <div className="hero-right" aria-hidden="true">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

/* ---------- Phone mockup (placeholder) ---------- */
function PhoneMock() {
  return (
    <div className="phone-stack">
      <div className="phone phone-back">
        <div className="phone-screen phone-screen-dark">
          <div className="ps-row" style={{justifyContent: "space-between"}}>
            <div className="ps-tag">RELATÓRIO</div>
            <div className="ps-dot"></div>
          </div>
          <div className="ps-bigserif">Semana 18</div>
          <div className="ps-chart">
            {[3,4,2,4,5,3,4].map((v,i) => (
              <div key={i} className="ps-bar" style={{height: `${v*16}%`}}></div>
            ))}
          </div>
          <div className="ps-rule"></div>
          <div className="ps-mini">
            <span className="ps-mini-num">82%</span>
            <span className="ps-mini-lbl">adesão à medicação</span>
          </div>
          <div className="ps-mini">
            <span className="ps-mini-num">6.4h</span>
            <span className="ps-mini-lbl">sono médio</span>
          </div>
        </div>
      </div>
      <div className="phone phone-front">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <div className="ps-row">
            <div className="ps-greet">
              <div className="ps-greet-l1">Bom dia,</div>
              <div className="ps-greet-l2">Helena</div>
            </div>
            <div className="ps-avatar"></div>
          </div>
          <div className="ps-prompt">
            <div className="ps-prompt-lbl">CHECK-IN DE HOJE</div>
            <div className="ps-prompt-q">Como você está se sentindo?</div>
            <div className="ps-mood-row">
              {["○","○","◐","●","○"].map((g,i) => (
                <div key={i} className={`ps-mood ${i===3 ? "on" : ""}`}>{g}</div>
              ))}
            </div>
          </div>
          <div className="ps-card">
            <div className="ps-card-row">
              <div className="ps-card-ico">◐</div>
              <div className="ps-card-text">
                <div className="ps-card-t">Sono</div>
                <div className="ps-card-s">7h 12min · dormiu 23:40</div>
              </div>
            </div>
          </div>
          <div className="ps-card">
            <div className="ps-card-row">
              <div className="ps-card-ico ps-pill">℞</div>
              <div className="ps-card-text">
                <div className="ps-card-t">Medicação</div>
                <div className="ps-card-s">2 de 3 tomadas hoje</div>
              </div>
            </div>
          </div>
          <div className="ps-fab">+</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Doors ---------- */
function Doors({ show }) {
  const { t } = useI18n();
  if (!show) return null;
  return (
    <section className="section section-doors" id="who" data-screen-label="02 Doors">
      <div className="wrap">
        <div className="section-head">
          <div className="label-row">
            <span className="kicker"><span className="num">02</span>{t("nav.who")}</span>
            <span className="rule"></span>
          </div>
          <h2 className="title">{t("doors.title")}</h2>
          <p className="sub lede">{t("doors.subtitle")}</p>
        </div>
        <div className="doors-grid">
          <article className="door">
            <span className="kicker">{t("doors.patient.label")}</span>
            <h3 className="door-title">{t("doors.patient.title")}</h3>
            <p>{t("doors.patient.body")}</p>
            <ul className="door-bullets">
              <li>{t("doors.patient.b1")}</li>
              <li>{t("doors.patient.b2")}</li>
              <li>{t("doors.patient.b3")}</li>
            </ul>
            <a className="btn btn-outline" href="#download">
              {t("doors.patient.cta")}
              <Arrow/>
            </a>
          </article>
          <article className="door door-pro">
            <span className="kicker">{t("doors.pro.label")}</span>
            <h3 className="door-title">{t("doors.pro.title")}</h3>
            <p>{t("doors.pro.body")}</p>
            <ul className="door-bullets">
              <li>{t("doors.pro.b1")}</li>
              <li>{t("doors.pro.b2")}</li>
              <li>{t("doors.pro.b3")}</li>
            </ul>
            <a className="btn btn-primary" href="#download">
              {t("doors.pro.cta")}
              <Arrow inverse/>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function Arrow({ inverse }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
    </svg>
  );
}

/* ---------- About ---------- */
function About({ show }) {
  const { t } = useI18n();
  if (!show) return null;
  return (
    <section className="section" id="about" data-screen-label="03 About">
      <div className="wrap">
        <div className="section-head">
          <div className="label-row">
            <span className="kicker">{t("about.kicker")}</span>
            <span className="rule"></span>
          </div>
          <h2 className="title">{t("about.title")}</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p className="lede" style={{fontSize: 22, lineHeight: 1.45, color: "var(--ink)"}}>{t("about.lede")}</p>
            <blockquote className="about-quote">
              {t("about.quote")}
              <cite>{t("about.quoteSrc")}</cite>
            </blockquote>
          </div>
          <div className="about-stats">
            {["stat1", "stat2", "stat3"].map((k) => (
              <div key={k} className="about-stat">
                <div className="num">{t(`about.${k}.num`)}</div>
                <div className="lbl">{t(`about.${k}.label`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function How({ show }) {
  const { t } = useI18n();
  if (!show) return null;
  return (
    <section className="section section-moss" id="how" data-screen-label="04 How">
      <div className="wrap">
        <div className="section-head">
          <div className="label-row label-row-moss">
            <span className="kicker kicker-moss">{t("how.kicker")}</span>
            <span className="rule rule-moss"></span>
          </div>
          <h2 className="title title-moss">{t("how.title")}</h2>
        </div>
        <div className="steps-grid">
          {[1,2,3,4].map((i) => (
            <article key={i} className="step">
              <div className="step-num">{t(`how.step${i}.num`)}</div>
              <h3 className="step-title">{t(`how.step${i}.title`)}</h3>
              <p className="step-body">{t(`how.step${i}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function Features({ show }) {
  const { t } = useI18n();
  if (!show) return null;
  const items = [
    { i: 1, ico: <FeatIco kind="mood"/> },
    { i: 2, ico: <FeatIco kind="bell"/> },
    { i: 3, ico: <FeatIco kind="sos"/> },
    { i: 4, ico: <FeatIco kind="pill"/> },
    { i: 5, ico: <FeatIco kind="dash"/> },
    { i: 6, ico: <FeatIco kind="lock"/> },
  ];
  return (
    <section className="section" id="features" data-screen-label="05 Features">
      <div className="wrap">
        <div className="section-head">
          <div className="label-row">
            <span className="kicker">{t("feat.kicker")}</span>
            <span className="rule"></span>
          </div>
          <h2 className="title">{t("feat.title")}</h2>
        </div>
        <div className="feat-grid">
          {items.map(({i, ico}) => (
            <article key={i} className="feat">
              <div className="feat-ico">{ico}</div>
              <h3 className="feat-t">{t(`feat.${i}.title`)}</h3>
              <p className="feat-b">{t(`feat.${i}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatIco({ kind }) {
  const c = "currentColor";
  const props = { width:24, height:24, viewBox:"0 0 24 24", fill:"none", stroke:c, strokeWidth:1.6, strokeLinecap:"round", strokeLinejoin:"round", "aria-hidden":true };
  switch (kind) {
    case "mood": return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>;
    case "bell": return <svg {...props}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>;
    case "sos":  return <svg {...props}><path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6z"/><path d="M9 12h6M9 9h6M9 15h4"/></svg>;
    case "pill": return <svg {...props}><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)"/><line x1="8" y1="8" x2="16" y2="16"/></svg>;
    case "dash": return <svg {...props}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M9 14v3M13 12v5M17 15v2"/></svg>;
    case "lock": return <svg {...props}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>;
    default: return null;
  }
}

/* ---------- FAQ ---------- */
function FAQ({ show }) {
  const { t, lang } = useI18n();
  const [open, setOpen] = lpUseState(0);
  if (!show) return null;
  return (
    <section className="section" id="faq" data-screen-label="06 FAQ">
      <div className="wrap">
        <div className="section-head">
          <div className="label-row">
            <span className="kicker">{t("faq.kicker")}</span>
            <span className="rule"></span>
          </div>
          <h2 className="title">{t("faq.title")}</h2>
        </div>
        <div className="faq-list">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-q-num">0{i}</span>
                <span className="faq-q-text">{t(`faq.${i}.q`)}</span>
                <span className="faq-q-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </button>
              <div className="faq-a">
                <p>{t(`faq.${i}.a`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Download CTA ---------- */
function DownloadCTA({ show }) {
  const { t } = useI18n();
  if (!show) return null;
  return (
    <section className="section section-cta" id="download" data-screen-label="07 Download">
      <div className="wrap cta-inner">
        <div className="cta-deco" aria-hidden="true"></div>
        <h2 className="cta-title">{t("cta.title")}</h2>
        <p className="cta-body lede">{t("cta.body")}</p>
        <StoreButtons />
        <p className="cta-note mono">{t("cta.note")}</p>
      </div>
    </section>
  );
}

/* ---------- App root ---------- */
const ACCENT_MAP = {
  "#3D6B55": { primary: "#3D6B55", deep: "#2C5142" }, // moss (default)
  "#7A3A3A": { primary: "#7A3A3A", deep: "#5C2A2A" }, // bordô
  "#B8841E": { primary: "#B8841E", deep: "#6E5012" }, // gold
  "#3F4754": { primary: "#3F4754", deep: "#222831" }, // slate
};

function getMetisLandingTweaks() {
  const defaults = {
    accent: "#3D6B55",
    hero_l1: "",
    hero_l2: "",
    hero_l3: "",
    show_hero: true,
    show_doors: true,
    show_about: true,
    show_how: true,
    show_features: true,
    show_faq: true,
    show_cta: true
  };
  return { ...defaults, ...(window.METIS_TWEAKS || {}) };
}

function LandingApp() {
  const [t] = lpUseState(getMetisLandingTweaks);

  lpUseEffect(() => {
    const c = ACCENT_MAP[t.accent] || ACCENT_MAP["#3D6B55"];
    document.documentElement.style.setProperty("--moss", c.primary);
    document.documentElement.style.setProperty("--moss-deep", c.deep);
  }, [t.accent]);

  const headline = (t.hero_l1 || t.hero_l2 || t.hero_l3)
    ? { l1: t.hero_l1, l2: t.hero_l2, l3: t.hero_l3 }
    : null;

  return (
    <React.Fragment>
      <Nav />
      <Hero headlineOverride={headline} showHero={t.show_hero} />
      <Doors show={t.show_doors} />
      <About show={t.show_about} />
      <How show={t.show_how} />
      <Features show={t.show_features} />
      <FAQ show={t.show_faq} />
      <DownloadCTA show={t.show_cta} />
      <Footer />
    </React.Fragment>
  );
}

window.LandingApp = LandingApp;
