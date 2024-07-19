import nameHome from "../../assets/names/name-home.svg";

import { GridContainer } from "../../components/GridContainer";
import { MyFooter } from "../../components/MyFooter";

import "./styles.css";

export default function Home() {
  return (
    <main className="page-container">
      <section className="home-page">
        <img src={nameHome} alt="Cristian Corrales" className="home__name" />
        <div className="home__middle-line"></div>
        <section className="home__text text-right">
          <p>Marketing, Formulación de Proyectos &</p>
          <p>Desarrollo Web</p>
        </section>
      </section>
      <GridContainer />
      <MyFooter />
    </main>
  );
}
