import Studies from "../../components/Studies";
import WorkHistory from "../../components/WorkHistory";
import SkillTools from "../../components/SkillTools";
import "./styles.css";

export default function Skills() {
  return (
    <main className="page-container">
      <section className="skills-container">
        <h1 className="text-title text-center">ESTUDIOS Y HABILIDADES</h1>
        <SkillTools />
        <div className="skills-wrap">
          <Studies />
          <WorkHistory />
        </div>
      </section>
    </main>
  );
}
