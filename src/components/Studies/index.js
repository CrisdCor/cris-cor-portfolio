import "./styles.css";

export default function Studies() {
  /*****************************************************************
   * Lista de estudios formales realizados
   * ***************************************************************/
  const listStudies = [
    {
      title: "Administrador Comercial y de Mercadeo",
      institute: "Institución Universitiaria ESUMER",
      year: "2014",
      type: "Superior",
    },
    {
      title: "Especialista en Formulación y Evaluación de Proyectos",
      institute: "Institución Universitiaria ITM",
      year: "2020",
      type: "Superior",
    },
    {
      title: "Curso de Power BI - Análisis de Datos y Business Intelligence",
      institute: "Udemy",
      year: "2024",
      type: "Educo",
    },
    {
      title:
        "Curso de Análisis en Microsoft Excel: Power Pivot, DAX y Power Query",
      institute: "Udemy",
      year: "2021",
      type: "Educo",
    },
    {
      title: "Curso de Ultimate JavaScript: por Nicolas Schurman",
      institute: "Udemy",
      year: "2024",
      type: "Educo",
    },
    {
      title: "Curso de Tablas Dinámicas",
      institute: "Udemy",
      year: "2021",
      type: "Educo",
    },
  ];

  /*****************************************************************
   * Renderización del listado de forma ordenada
   * ***************************************************************/
  listStudies.sort((a, b) => {
    if (a.year > b.year) return -1;
    if (a.year > b.year) return 1;
    return 0;
  });

  return (
    <div className="skills-studies">
      <section className="studies-section">
        <h2 className="studies-section__subtitle text-l text-right">
          Educación superior
        </h2>
        {listStudies
          .filter((el) => el.type === "Superior")
          .map((el) => (
            <article key={el.index} className="studies-section__article">
              <div>
                <p className="text-m text-right">{el.title}</p>
                <p className="text-s text-right">{el.institute}</p>
              </div>
              <h2 className="skill-element__year text-l">{el.year}</h2>
            </article>
          ))}
      </section>
      <section className="studies-section">
        <h2 className="studies-section__subtitle text-l text-right">
          Cursos - educación continua
        </h2>
        {listStudies
          .filter((el) => el.type === "Educo")
          .map((el) => (
            <article key={el.index} className="studies-section__article">
              <div>
                <p className="text-m text-right">{el.title}</p>
                <p className="text-s text-right">{el.institute}</p>
              </div>
              <h2 className="text-l">{el.year}</h2>
            </article>
          ))}
      </section>
    </div>
  );
}
