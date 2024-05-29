import "./styles.css";

export default function Skills() {
  /**
   * ***************************************************************
   * Lista de estudios formales realizados
   * ***************************************************************
   * */
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
  ];

  const workList = [
    {
      name: "Proyecto: integración de pagos",
      company: "Institución Universitaria Pascual Bravo",
      desc: "Se lideró el proyecto de integración entre bancos, una aplicación web institucional llamada SICAU y el ERP financiero a través de WS que permitió a la entidad la actualización de información de facturación y pagos en tiempo real, mejorando los procesos de facturación electrónica.",
      year: "2024",
    },

    {
      name: "Proyecto: implementación de ERP",
      company: "Institución Universitaria Pascual Bravo",
      desc: "Se participó como usuario líder en la parametrización e implementación de un nuevo ERP que transversarlizó los procesos administrativos, contables y financieros de la institución.",
      year: "2018",
    },
    {
      name: "Proyecto: Análisis de beneficiarios",
      company: "Institución Universitaria Pascual Bravo",
      desc: "En vista de dificultades que se presentaron en un proceso de asignación de benenficios para la comunidad estudiantil, se implementó a través de una modelación de datos con Power BI, que permitiría identificar de la comunidad los estudiantes que podrían acceder a los beneficios conocidos como Matrícula Cero y Política de Gratuidad.",
      year: "2023",
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
            <h2 className="skills-section__subtitle text-l text-right">
              Estudios formales
            </h2>
            {listStudies.map((el, index) => (
              <article className="skill-element">
                <div className="skill-element__detail">
                  <p className="detail-text text-m text-right">{el.title}</p>
                  <p className="detail-text detail-text--institute text-s text-right">
                    {el.institute}
                  </p>
                </div>
                <h2 className="skill-element__year text-l">{el.year}</h2>
              </article>
            ))}
          </div>
          <div className="skills-section section__right">
            <h2 className="skills-section__subtitle text-l text-left">
              Reconocimientos - Trayectoria laboral
            </h2>
            {workList.map((el, index) => (
              <article className="work-element">
                <p className="work-element__name text-m text-left text-bold">
                  {`${el.year} - ${el.name} `}
                </p>
                <p className="work-element__company text-s text-left text-bold">
                  {el.company}
                </p>
                <p className="text-s text-left">{el.desc}</p>
              </article>
            ))}
          </div>
          <div className="skills-section--bottom section__bottom"></div>
        </div>
        <div className="skills-tools"></div>
      </section>
    </main>
  );
}
