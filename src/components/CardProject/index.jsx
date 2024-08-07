import Github from "../../assets/icons/github.svg";
import Link from "../../assets/icons/link-2.svg";
import "./styles.css";

export default function CardProject({ listProjects }) {
  return (
    <>
      {listProjects.map((project) => (
        <article key={listProjects.name} className="card-project">
          <div className="card-project--mask">
            <div className="card-project__top">
              <picture className="card-project__image">
                <img src={project.image} alt={project.name} />
              </picture>
              <div className="card-project__text">
                <p className="text-l text-bold">{project.name}</p>
                <p className="text-s">{project.desc}</p>
              </div>
            </div>
            <div className="card-project__footer">
              <p className="card-project__footer--year text-s text-center">
                {project.year}
              </p>
              <div className="card-project__footer--links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img src={Github} alt="Github" />
                </a>
                <a
                  className="footer-links__text"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Link} alt="Enlace" />
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
