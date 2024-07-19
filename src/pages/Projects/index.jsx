import RickMortyApiImg from "../../assets/images/image-rick-&-morty-api.png";
import PandaShootImg from "../../assets/images/image-panda-shoot.png";
import PandaShoot2Img from "../../assets/images/image-panda-shooting-v2.png";
import ReporteCierreIupbImg from "../../assets/images/image-cierre-iupb.png";
import ImageEjemplo2 from "../../assets/images/ejemplo-1.jpg";
import BeneficiosIupbImg from "../../assets/images/image-beneficios-iupb.png";

import CardProject from "../../components/CardProject";
// import MyFooter from "../../components/MyFooter";

import "./styles.css";

export default function Projects() {
  const listProjects = [
    {
      name: "Rick & Morty - API",
      desc: "Este es un proyecto netamente académico que se desarrolló a lo largo de un curso impartido por el profesor Rafa Tárrega en Udemy. Este, fue gratuito e introductorio previo al inicio de un curso de NEXT JS - Curso de 0 a Experto",
      github: "https://github.com/CrisdCor/curso-react-rick-morty",
      url: "https://curso-react-rick-morty.vercel.app/",
      image: RickMortyApiImg,
      year: "2024",
      type: "A",
    },
    {
      name: "Panda Shoot",
      desc: "Este es un proyecto académico que se desarrolló a lo largo de un curso impartido por la profesora Tefa Code en Platzi. En este curso se adquirieron conocimientos de animación con CSS.",
      github: "https://github.com/CrisdCor/shooter-panda-game",
      url: "https://shooter-panda-game.vercel.app/",
      image: PandaShootImg,
      year: "2023",
      type: "A",
    },
    {
      name: "Informe Matrículas Institución Educativa",
      desc: "Este proyecto fue realizado con la finalidad  de condensar la información que se extrae del proceso de matrículas de una institución de educación superior. Es un proyecto de utilidad real, pero que para el caso expuesto los datos personales fueron modificado a fin de proteger su privacidad. Para la construcción del proyecto se usó Figma en la creación de los backgorund y la visualización y modelado de datos con Power BI.",
      // github: "",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMWJhOTM2NTUtYTU0Ni00OGFmLWFmMTktODYyNjgxZWE2NWM3IiwidCI6ImIxNTk2YThmLWMxNzYtNGNlZS1hN2ZhLTNjMTk1YjY0MTA1MSIsImMiOjR9",
      image: ReporteCierreIupbImg,
      year: "2024",
      type: "W",
    },
    {
      name: "Listado Aprobados Beneficios",
      desc: "Este proyecto solucionó de manera eficaz la automatización de validación del cumplimiento de requisitos de una población estudiantil para acceder a determinado beneficio. Por lo cual, haciendo uso de los reportes generados a través del sistema académico y con un modelado de datos hecho en Power BI se pudo generar una herramienta que permitía al área encargada de atención al usuario brindar un servicio con información inmediata. La información acá consignada es un demo y no corresponde a los datos reales.",
      github: "/projects",
      url: "https://app.powerbi.com/view?r=eyJrIjoiN2U3Y2VjNGItMDAzYi00Nzk0LWJhNjAtM2ZjODI0ZTNjMGY1IiwidCI6ImIxNTk2YThmLWMxNzYtNGNlZS1hN2ZhLTNjMTk1YjY0MTA1MSIsImMiOjR9",
      image: BeneficiosIupbImg,
      year: "2024",
      type: "W",
    },
    {
      name: "Caza Panda",
      desc: "Este proyecto fue el escalamiento de un juego que se desarrolló a lo largo de un curso que buscaba mejorar las habilidades en animaciones con CSS. En este caso, se agregó interactividad al juego haciendo uso de React",
      github: "https://github.com/CrisdCor/panda-shooting-v2",
      url: "https://panda-shooting-v2.vercel.app/",
      image: PandaShoot2Img,
      year: "2024",
      type: "W",
    },
    {
      name: "Box App",
      desc: "Aplicación en construcción...",
      github: "/projects",
      url: "/projects",
      image: ImageEjemplo2,
      year: "2024",
      type: "W",
    },
  ];

  listProjects.sort((a, b) => {
    if (a.year > b.year) return -1;
    if (a.year > b.year) return 1;
    return 0;
  });

  return (
    <main className="page-container">
      <section className="projects-container">
        <h1 className="projects-grid__title text-title">PROYECTOS</h1>
        <div className="projects-grid-container">
          <CardProject
            listProjects={listProjects.filter(
              (project) => project.type === "W"
            )}
          />
        </div>
        <span className="projects__division"></span>
        <div className="projects-grid-container">
          <CardProject
            listProjects={listProjects.filter(
              (project) => project.type === "A"
            )}
          />
        </div>

        {/* <MyFooter /> */}
      </section>
    </main>
  );
}
