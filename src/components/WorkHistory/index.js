import "./styles.css";

export default function WorkHistory() {
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
      desc: "En vista de las dificultades que se presentaron en el proceso de asignación de benenficios para la comunidad estudiantil, se implementó a través de una modelación de datos con Power BI, que permitiría identificar de la comunidad los estudiantes que podrían acceder a los beneficios conocidos como Matrícula Cero y Política de Gratuidad.",
      year: "2023",
    },
  ];

  return (
    <section className="skills-work">
      <h2 className="work-section__subtitle text-l text-left">
        Reconocimientos - Trayectoria laboral
      </h2>
      {workList.map((el, index) => (
        <article className="work-section">
          <p className="work-element__name text-m text-left text-bold">
            {`${el.year} - ${el.name} `}
          </p>
          <p className="work-element__company text-s text-left text-bold">
            {el.company}
          </p>
          <p className="text-s text-left">{el.desc}</p>
        </article>
      ))}
    </section>
  );
}
