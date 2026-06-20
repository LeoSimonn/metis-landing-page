/* Metis — Terms of Use page (sumário lateral + texto) */

const { useState: tuUseState, useEffect: tuUseEffect, useRef: tuUseRef } = React;

const TERM_SECTIONS = [
  "ts1","ts2","ts3","ts4","ts5","ts6","ts7","ts8","ts9","ts10","ts11","ts12","ts13"
];

function TermsPage() {
  const { t } = useI18n();
  const [active, setActive] = tuUseState("ts1");

  tuUseEffect(() => {
    const onScroll = () => {
      let cur = "ts1";
      for (const id of TERM_SECTIONS) {
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
          <h1 className="pp-title">{t("tos.title")}</h1>
          <p className="pp-sub lede">{t("tos.subtitle")}</p>
          <div className="pp-meta">
            <span className="badge"><span className="dot"></span>{t("tos.version")}</span>
            <span className="pp-updated mono">{t("tos.updated")}</span>
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
              {TERM_SECTIONS.map((id) => (
                <li key={id} className={active === id ? "on" : ""}>
                  <a href={`#${id}`}>{t(`tos.${id}.title`)}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="pp-article">
            {TERM_SECTIONS.map((id) => (
              <section key={id} id={id} className="pp-section">
                <h2>{t(`tos.${id}.title`)}</h2>
                <p>{t(`tos.${id}.body`)}</p>
              </section>
            ))}
            <div className="pp-end">
              <span className="kicker"><span className="num">·</span>v1.0 · 2026/1 · AGES</span>
              <a href={L.privacy} className="btn btn-outline">
                {t("foot.legal.privacy")}
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

window.TermsPage = TermsPage;
