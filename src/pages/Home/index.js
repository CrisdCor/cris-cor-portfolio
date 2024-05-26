import nameHome from "../../assets/names/name-home.svg";
import "./styles.css";

export default function Home() {
  return (
    <main className="home-container">
      <section className="home-container__wrap-home">
        <div className="wrap-home__decorations">
          <span className="decorations decorations--one"></span>
          <span className="decorations decorations--two"></span>
          <span className="decorations decorations--two"></span>
        </div>
        <div className="wrap-home__section section--bottom">
          <div className="section--top__text">
            <p>Profesional en marketing, Proyectos &</p>
            <p>Desarrollo Web</p>
          </div>
        </div>
        <div className="wrap-home__section section--top">
          <p className="section--top__text">Hola,</p>
          <p className="section--top__text">Yo soy</p>
          <img
            className="section--top__image-name"
            src={nameHome}
            alt="Cristian Corrales"
          />
        </div>
      </section>
    </main>
  );
}
