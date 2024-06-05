import RickMortyApiImg from "../../assets/images/image-rick-&-morty-api.png";
import PandaShootImg from "../../assets/images/image-panda-shoot.png";
import ImageEjemplo1 from "../../assets/images/ejemplo-1.jpg";
import ImageEjemplo2 from "../../assets/images/ejemplo-2.jpg";
import CardProject from "../../components/CardProject";
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
      name: "Metcon Trainning",
      desc: "Aplicación en construcción...",
      github: "/projects",
      url: "/projects",
      image: ImageEjemplo1,
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
        <h2 className="projects__subtitle text-l">Proyectos académicos</h2>
        <div className="projects-grid-container">
          <CardProject
            listProjects={listProjects.filter(
              (project) => project.type === "A"
            )}
          />
        </div>
      </section>
    </main>
  );
}
