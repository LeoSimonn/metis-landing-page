/* Metis — App Privacy Details (Apple-style nutrition label) */

function OptionsPage() {
  const { t } = useI18n();

  /* Data categories — Linked to you */
  const linked = [
    { key: "contact",   icon: "user"    },
    { key: "health",    icon: "heart"   },
    { key: "sensitive", icon: "lock"    },
    { key: "content",   icon: "note"    },
    { key: "id",        icon: "fingerprint" }
  ];
  /* Data categories — Not linked to you */
  const notLinked = [
    { key: "diag",  icon: "bug"   },
    { key: "usage", icon: "chart" }
  ];

  const purposes = [
    { key: "app",       icon: "gear"  },
    { key: "analytics", icon: "chart" },
    { key: "research",  icon: "book"  }
  ];

  return (
    <React.Fragment>
      <Nav />
      <div className="apd-wrap">
        {/* Header */}
        <header className="apd-header">
          <a href={window.MetisLinks.home} className="pp-back">← {t("pp.back")}</a>

          <span className="kicker apd-kicker">
            <PrivacyShield/>
            {t("po.privacy.title")}
          </span>

          <h1 className="pp-title apd-title">{t("po.title")}</h1>
          <p className="pp-sub lede apd-sub">{t("po.subtitle")}</p>

          <div className="apd-meta">
            <span className="badge"><span className="dot"></span>{t("pp.version")}</span>
            <span className="apd-platforms mono">{t("po.platforms")}</span>
            <div className="apd-meta-actions">
              <a href={window.MetisLinks.privacy} className="btn btn-outline">{t("po.policy")} →</a>
              <button className="btn btn-ghost" onClick={() => window.print()}>{t("po.print")}</button>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="apd-body">

          {/* ---- Tracking (none) ---- */}
          <section className="apd-section">
            <header className="apd-section-head">
              <span className="kicker"><span className="num">01</span>{t("po.section.track")}</span>
              <h2>{t("po.section.track")}</h2>
              <p className="apd-section-desc">{t("po.section.track.desc")}</p>
            </header>
            <div className="apd-none">
              <div className="apd-none-badge">
                <NoneIcon/>
                {t("po.none")}
              </div>
              <p>{t("po.none.desc")}</p>
            </div>
          </section>

          {/* ---- Linked to you ---- */}
          <section className="apd-section">
            <header className="apd-section-head">
              <span className="kicker"><span className="num">02</span>{t("po.section.linked")}</span>
              <h2>{t("po.section.linked")}</h2>
              <p className="apd-section-desc">{t("po.section.linked.desc")}</p>
            </header>
            <div className="apd-grid">
              {linked.map((c) => <DataCard key={c.key} keyName={c.key} icon={c.icon} />)}
            </div>
          </section>

          {/* ---- Not linked to you ---- */}
          <section className="apd-section">
            <header className="apd-section-head">
              <span className="kicker"><span className="num">03</span>{t("po.section.notlinked")}</span>
              <h2>{t("po.section.notlinked")}</h2>
              <p className="apd-section-desc">{t("po.section.notlinked.desc")}</p>
            </header>
            <div className="apd-grid">
              {notLinked.map((c) => <DataCard key={c.key} keyName={c.key} icon={c.icon} variant="notlinked" />)}
            </div>
          </section>

          {/* ---- Purposes legend ---- */}
          <section className="apd-purposes">
            <header className="apd-section-head">
              <span className="kicker"><span className="num">·</span>{t("po.purposes")}</span>
              <h2>{t("po.purposes")}</h2>
              <p className="apd-section-desc">{t("po.purposes.desc")}</p>
            </header>
            <div className="apd-purpose-grid">
              {purposes.map((p) => (
                <div key={p.key} className="apd-purpose">
                  <div className="apd-purpose-ico"><PurposeIco kind={p.icon}/></div>
                  <h3>{t(`po.purpose.${p.key}`)}</h3>
                  <p>{t(`po.purpose.${p.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---- Privacy by default panel ---- */}
          <section className="apd-defaults">
            <div className="apd-defaults-inner">
              <div className="apd-defaults-left">
                <span className="kicker apd-defaults-kicker">{t("po.privacy.kicker")}</span>
                <h2 className="apd-defaults-title">{t("po.privacy.title")}</h2>
                <p className="apd-defaults-body">{t("po.privacy.body")}</p>
              </div>
              <ul className="apd-defaults-list">
                {[1,2,3,4,5,6].map((i) => (
                  <li key={i}>
                    <span className="apd-check"><CheckSmall/></span>
                    <span>{t(`po.privacy.b${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <footer className="apd-foot">
            <span className="mono">{t("po.last")}</span>
            <a href={window.MetisLinks.privacy} className="btn btn-outline">
              {t("po.policy")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
            </a>
          </footer>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

/* ---------- Data category card ---------- */
function DataCard({ keyName, icon, variant }) {
  const { t } = useI18n();
  return (
    <article className={`apd-card ${variant === "notlinked" ? "apd-card-soft" : ""}`}>
      <div className="apd-card-head">
        <div className="apd-card-ico"><DataIco kind={icon}/></div>
        <h3 className="apd-card-title">{t(`po.cat.${keyName}.t`)}</h3>
      </div>
      <div className="apd-card-items mono">{t(`po.cat.${keyName}.items`)}</div>
      <div className="apd-card-foot">
        <div className="apd-card-row">
          <span className="apd-card-lbl">USO</span>
          <span className="apd-card-val">{t(`po.cat.${keyName}.use`)}</span>
        </div>
        <p className="apd-card-why">{t(`po.cat.${keyName}.why`)}</p>
      </div>
    </article>
  );
}

/* ---------- Icons ---------- */
const _ico = { width:22, height:22, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:1.6, strokeLinecap:"round", strokeLinejoin:"round", "aria-hidden":true };
function DataIco({ kind }) {
  switch (kind) {
    case "user":        return <svg {..._ico}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case "heart":       return <svg {..._ico}><path d="M12 21s-7-4.5-9-9.5C1.5 7 4 4 7.5 4c1.7 0 3.3.8 4.5 2 1.2-1.2 2.8-2 4.5-2C20 4 22.5 7 21 11.5 19 16.5 12 21 12 21z"/></svg>;
    case "lock":        return <svg {..._ico}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>;
    case "note":        return <svg {..._ico}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="14" y2="17"/></svg>;
    case "fingerprint": return <svg {..._ico}><path d="M6 17.5C5 16 4 14 4 11a8 8 0 0 1 16 0c0 3-1 5-2 6.5"/><path d="M8 21c1-1 2-3 2-6.5a4 4 0 0 1 8 0c0 2-.5 4-1 5"/><path d="M12 6.5v7.5"/></svg>;
    case "bug":         return <svg {..._ico}><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V3M9 3l3 3 3-3M3 13h5M16 13h5M5 8l3 2M19 8l-3 2M5 18l3-2M19 18l-3-2"/></svg>;
    case "chart":       return <svg {..._ico}><line x1="4" y1="20" x2="20" y2="20"/><rect x="6" y="12" width="3" height="6"/><rect x="11" y="8" width="3" height="10"/><rect x="16" y="14" width="3" height="4"/></svg>;
    default: return null;
  }
}
function PurposeIco({ kind }) {
  switch (kind) {
    case "gear":   return <svg {..._ico}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.04a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.04a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
    case "chart":  return <svg {..._ico}><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>;
    case "book":   return <svg {..._ico}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
    default: return null;
  }
}
function NoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>;
}
function CheckSmall() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
}
function PrivacyShield() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6z"/></svg>;
}

window.OptionsPage = OptionsPage;
