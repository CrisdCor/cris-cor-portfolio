import nameHome from "../../assets/names/name-home.svg";
import { GridContainer } from "../../components/GridContainer";
import "./styles.css";

export default function Home() {
  return (
    <main className="page-container">
      <section className="home-page">
        <img src={nameHome} alt="Cristian Corrales" className="home__name" />
        <div className="home__middle-line"></div>
        <section className="home__text text-l">
          <p>Marketing, Formulación de Proyectos &</p>
          <p>Desarrollo</p>
        </section>
      </section>
      <GridContainer />
    </main>
  );
}
