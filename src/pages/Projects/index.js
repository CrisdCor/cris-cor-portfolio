import ImageEjemplo1 from "../../assets/images/ejemplo-2.jpg";
import ImageEjemplo2 from "../../assets/images/ejemplo-3.jpg";
import ImageEjemplo3 from "../../assets/images/ejemplo-4.jpg";
import ImageEjemplo4 from "../../assets/images/ejemplo-5.jpg";
import CardProject from "../../components/CardProject";
import "./styles.css";

export default function Projects() {
  const listProjects = [
    {
      name: "Panda Shooter",
      desc: "Esto es una prueba de una breve descripción del proyecto que estoy plantenado",
      github: "https://github.com/CrisdCor/shooter-panda-game",
      url: "https://github.com/CrisdCor/shooter-panda-game",
      image: ImageEjemplo1,
      year: "2023",
    },
    {
      name: "Todo List",
      desc: "Esto es una prueba de una breve descripción del proyecto que estoy plantenado ",
      github: "https://github.com/CrisdCor/curso-react-intro",
      url: "https://github.com/CrisdCor/shooter-panda-game",
      image: ImageEjemplo2,
      year: "2021",
    },
    {
      name: "Box Aplication",
      desc: "Esto es una prueba de una breve descripción del proyecto que estoy plantenado",
      github: "https://github.com/CrisdCor/curso-react-intro",
      url: "https://github.com/CrisdCor/shooter-panda-game",
      image: ImageEjemplo4,
      year: "2021",
    },
    {
      name: "App Boton",
      desc: "Esto es una prueba de una breve descripción del proyecto que estoy plantenado",
      github: "https://github.com/CrisdCor/curso-react-intro",
      url: "https://github.com/CrisdCor/shooter-panda-game",
      image: ImageEjemplo3,
      year: "2024",
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
          <CardProject listProjects={listProjects} />
        </div>
      </section>
    </main>
  );
}
