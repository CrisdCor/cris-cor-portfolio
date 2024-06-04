import "./styles.css";

export default function WorkHistory() {
  const workList = [
    {
      name: "Proyecto: integración de pagos",
      company: "Institución Universitaria Pascual Bravo",
      desc: "Durante mi carrera, he liderado proyectos clave que han tenido un impacto significativo en la eficiencia y efectividad de las operaciones institucionales. Uno de los proyectos destacados fue la integración entre los bancos, la aplicación web institucional SICAU y el ERP financiero mediante servicios web (WS). Este proyecto permitió a la entidad actualizar la información de facturación y pagos en tiempo real, lo que mejoró notablemente los procesos de facturación electrónica y optimizó la gestión financiera en su totalidad.",
      year: "2024",
    },

    {
      name: "Proyecto: implementación de ERP",
      company: "Institución Universitaria Pascual Bravo",
      desc: "Participé como usuario líder en la parametrización e implementación de un nuevo ERP, el cual transversalizó los procesos administrativos, contables y financieros de la institución. Esta iniciativa permitió una integración más eficiente de las funciones internas y mejoró la precisión y velocidad en la gestión de datos.",
      year: "2018",
    },
    {
      name: "Proyecto: Análisis de beneficiarios",
      company: "Institución Universitaria Pascual Bravo",
      desc: "Para abordar las dificultades en el proceso de asignación de beneficios para la comunidad estudiantil, implementé una solución mediante la modelación de datos con Power BI. Esta herramienta permitió identificar de manera precisa a los estudiantes elegibles para los beneficios de Matrícula Cero y Política de Gratuidad, optimizando así la distribución de recursos y mejorando la equidad en el acceso a la educación.",
      year: "2023",
    },
    {
      name: "Proyecto: Reporte cierre de matrículas",
      company: "Institución Universitaria Pascual Bravo",
      desc: "Se implementó un reporte en Power BI con el cual se resumen a través de diferentes visualizaciones el resultado del cierre de matrículas por periodo, incluyendo cantidad de estudianes y valor de ingresos por niveles de formación.",
      year: "2023",
    },
  ];

  return (
    <section className="skills-work">
      <h2 className="work-section__subtitle text-l text-left">
        Reconocimientos - Trayectoria laboral
      </h2>
      {workList.map((el) => (
        <article key={el.index} className="work-section">
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
