/* Metis — Support page (documental, contato por e-mail) */

function SupportPage() {
  const { t } = useI18n();
  const L = window.MetisLinks;

  return (
    <React.Fragment>
      <Nav />
      <section className="sup-hero sup-hero-simple" data-screen-label="Suporte">
        <div className="wrap">
          <a href={L.home} className="pp-back">← {t("pp.back")}</a>
          <span className="kicker">{t("sup.simple.kicker")}</span>
          <h1 className="sup-title">{t("sup.simple.title")}</h1>
          <p className="sup-sub lede">{t("sup.simple.lede")}</p>
          <div className="sup-simple-card">
            <p className="sup-simple-body">{t("sup.simple.body")}</p>
            <a className="btn btn-primary" href={`mailto:${t("sup.simple.email")}`}>
              {t("sup.simple.cta")}
            </a>
            <p className="mono sup-simple-email">{t("sup.simple.email")}</p>
            <p className="sup-simple-note">{t("sup.simple.response")}</p>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

window.SupportPage = SupportPage;
