/* Metis — Privacy Policy page (sumário lateral + texto) */

const { useState: ppUseState, useEffect: ppUseEffect, useRef: ppUseRef } = React;

const SECTIONS = [
  "s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","s11","s12","s13","s14"
];

function PolicyPage() {
  const { t } = useI18n();
  const [active, setActive] = ppUseState("s1");

  ppUseEffect(() => {
    const onScroll = () => {
      let cur = "s1";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const L = window.MetisLinks;

  return (
    <React.Fragment>
      <Nav />
      <div className="pp-wrap">
        <header className="pp-header">
          <a href={L.home} className="pp-back">← {t("pp.back")}</a>
          <h1 className="pp-title">{t("pp.title")}</h1>
          <p className="pp-sub lede">{t("pp.subtitle")}</p>
          <div className="pp-meta">
            <span className="badge"><span className="dot"></span>{t("pp.version")}</span>
            <span className="pp-updated mono">{t("pp.updated")}</span>
            <button className="pp-print btn btn-ghost" onClick={() => window.print()}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              {t("pp.print")}
            </button>
          </div>
        </header>

        <div className="pp-body">
          <aside className="pp-toc">
            <div className="pp-toc-label">{t("pp.toc")}</div>
            <ol>
              {SECTIONS.map((id) => (
                <li key={id} className={active === id ? "on" : ""}>
                  <a href={`#${id}`}>{t(`pp.${id}.title`)}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="pp-article">
            {SECTIONS.map((id) => (
              <section key={id} id={id} className="pp-section">
                <h2>{t(`pp.${id}.title`)}</h2>
                <p>{t(`pp.${id}.body`)}</p>
              </section>
            ))}
            <div className="pp-end">
              <span className="kicker"><span className="num">·</span>v1.0 · 2026/1 · AGES</span>
              <a href={L.privacyOpts} className="btn btn-outline">
                {t("foot.legal.privacyopts")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

window.PolicyPage = PolicyPage;
