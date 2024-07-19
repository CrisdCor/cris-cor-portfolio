import "./styles.css";

export default function AboutMe() {
  return (
    <main className="page-container">
      <section className="about-me-section text-m">
        <h1 className="text-title text-center">ACERCA DE MI</h1>

        <article className="about-me__article article-personal">
          <div className="article--mask">
            <h2 className="text-l">Acerca de mi</h2>
            <p className="">
              Soy Cristian David Corrales O. nacido el 31 de octubre de 1987 en
              la hermosa ciudad de Medellín - Colombia y graduado como
              profesional en marketing. A lo largo de mi trayectoria laboral,
              descubrí una pasión inesperada, la tecnología. Mi primer
              acercamiento fue con Excel, una herramienta que inicialmente
              consideraba subutilizada. Pronto me di cuenta de su enorme
              potencial, aunque también noté sus limitaciones frente a las ideas
              que mi mente llegaba a imaginar. Esta revelación me impulsó a
              emprender un emocionante viaje en el desarrollo web, trazando como
              objetivo el ser un desarrollador fullstack. Actualmente, di
              comienzos a la travesía enfocándome en el frontend, buscando crear
              experiencias de usuario impactantes y dinámicas. Sin embargo, no
              está en mis planes detenerme aquí; estoy entusiasmado por expandir
              mis conocimientos hacia el backend, con el objetivo de dominar
              todos los aspectos del desarrollo web. Gracias por visitar mi
              portafolio. Aquí encontrarás proyectos que reflejan mi pasión,
              dedicación y el constante deseo de aprender y superar nuevas
              fronteras tecnológicas. ¡Espero que disfrutes explorando mi
              trabajo tanto como yo disfruto creándolo!
            </p>
          </div>
        </article>

        <article className="about-me__article article-hobbies text-m">
          <div className="article--mask">
            <h2 className="text-l">Hobbies</h2>
            <p>
              Si te intesa saber temas más personas sobre mí, te cuento que en
              mi tiempo libre me gusta:
            </p>
            <p>
              Ver muchas películas, en todas las plataformas de streaming que
              tenga y las disfruto mientras hasta acostado en mi cama, hasta
              cuando estoy cocinando
            </p>
            <p>
              También, soy amante del CrossFit, en algún momento de mi vida tuve
              la necesidad de realizar alguna actividad física y encontré esta
              modalidad deportiva como un espacio de esparcimiento. El CrossFit
              lo puedo describir como ¡Satisfacción garantizada!
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
