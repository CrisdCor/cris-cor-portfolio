import "./styles.css";

export default function Skills() {
  const listStudies = [
    {
      name: "Administrador Comercial y de Mercadeo",
      institute: "Institución Universitiaria Pascual Bravo",
      year: 2014,
    },
    {
      name: "Especialista en Formulación y Evaluación de Proyectos",
      institute: "Institución Universitiaria ITM",
      year: 2020,
    },
  ];

  /**
   * ***************************************************************
   * Ordena el objeto de lista de estudios por su año de graduación
   * del más nuevo al más antiguo
   * ***************************************************************
   * */

  listStudies.sort((a, b) => {
    if (a.year > b.year) return -1;
    if (a.year > b.year) return 1;
    return 0;
  });

  return (
    <main className="page-container">
      <section className="skills-container">
        <h1 className="text-title text-center">ESTUDIOS Y HABILIDADES</h1>
        <div className="skills-wrap">
          <div className="skills-section section__left">
            {listStudies.map((el, index) => (
              <article className="skill-element">
                <div className="skill-element__detail">
                  <p className="detail-text text-m text-right">{el.name}</p>
                  <p className="detail-text detail-text--institute text-s text-right">
                    {el.institute}
                  </p>
                </div>
                <h2 className="skill-element__subtitle text-l">{el.year}</h2>
              </article>
            ))}
          </div>
          <div className="skills-section section__right"></div>
          <div className="skills-section--bottom section__bottom"></div>
        </div>
      </section>
    </main>
  );
}
