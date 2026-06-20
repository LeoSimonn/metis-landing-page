/* Metis — shared React components: Nav, Footer, useI18n */

const { useState, useEffect, useCallback } = React;

/* ---------------------- i18n hook ---------------------- */
function useI18n() {
  const [lang, setLangState] = useState(window.MetisI18n.lang);
  useEffect(() => {
    return window.MetisI18n.onChange(setLangState);
  }, []);
  const t = useCallback((key) => window.MetisI18n.t(key), [lang]);
  const setLang = useCallback((l) => window.MetisI18n.setLang(l), []);
  return { t, lang, setLang };
}

/* ---------------------- Brand mark ---------------------- */
function BrandMark({ size = 36, withWord = true, wordColor }) {
  return (
    <a href={window.MetisLinks.home} className="brand" aria-label="Metis">
      <span className="brand-mark" style={{ width: size, height: size }} />
      {withWord && (
        <span className="brand-word" style={wordColor ? { color: wordColor } : undefined}>Metis</span>
      )}
    </a>
  );
}

/* ---------------------- Language toggle ---------------------- */
function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button type="button" className={lang === "pt" ? "on" : ""} onClick={() => setLang("pt")}>PT</button>
      <button type="button" className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
    </div>
  );
}

/* ---------------------- Nav (marca + CTA; idioma no rodapé) ---------------------- */
function Nav() {
  const { t } = useI18n();
  const L = window.MetisLinks;
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <BrandMark />
        <div className="nav-trail">
          <a className="btn btn-primary nav-cta-download" href={`${L.home}#download`}>
            {t("nav.download")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ---------------------- Footer ---------------------- */
function Footer() {
  const { t } = useI18n();
  const L = window.MetisLinks;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <BrandMark withWord={true} />
            <p className="footer-about">{t("foot.about")}</p>
          </div>
          <div>
            <h4>{t("foot.product")}</h4>
            <ul>
              <li><a href={`${L.home}#features`}>{t("foot.product.features")}</a></li>
              <li><a href={`${L.home}#how`}>{t("foot.product.how")}</a></li>
              <li><a href={`${L.home}#download`}>{t("foot.product.download")}</a></li>
              <li><a href={`${L.home}#`}>Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4>{t("foot.company")}</h4>
            <ul>
              <li><a href={`${L.home}#about`}>{t("foot.company.about")}</a></li>
              <li><a href="#">{t("foot.company.team")}</a></li>
              <li><a href="#">{t("foot.company.research")}</a></li>
              <li><a href="#">{t("foot.company.contact")}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t("foot.support")}</h4>
            <ul>
              <li><a href={L.support}>{t("foot.support.help")}</a></li>
              <li><a href={`mailto:${t("sup.simple.email")}`}>{t("foot.support.contact")}</a></li>
              <li><a href="tel:188">{t("foot.support.crisis")}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t("foot.legal")}</h4>
            <ul>
              <li><a href={L.privacy}>{t("foot.legal.privacy")}</a></li>
              <li><a href={L.privacyOpts}>{t("foot.legal.privacyopts")}</a></li>
              <li><a href={L.terms}>{t("foot.legal.terms")}</a></li>
              <li><a href="#">{t("foot.legal.cookies")}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <span>{t("foot.copyright")}</span>
            <span>{t("foot.tagline")}</span>
          </div>
          <div className="footer-bottom-lang">
            <span className="footer-lang-label">{t("foot.lang.label")}</span>
            <LangToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Expose globally */
Object.assign(window, { useI18n, BrandMark, LangToggle, Nav, Footer });
