import { useState, useEffect } from "react";

import { useStackList } from "../../hooks/useStackList";

import "./styles.css";

export default function SkillTools() {
  const { stackList } = useStackList();
  const [randomIndex, setRandomIndex] = useState(null);

  function getRandomIndex(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  useEffect(() => {
    const indices = stackList.map((_, index) => index);
    const interval = setInterval(() => {
      setRandomIndex(getRandomIndex(indices));
    }, 2000);

    return () => clearInterval(interval);
  }, [stackList]);

  return (
    <section className="skills-tools">
      {stackList.map((el, index) => (
        <div
          key={el.index}
          className={`tools__element ${
            randomIndex === index ? "tools__element--animation" : ""
          }`}
        >
          <img className="tools__element-icon" src={el.icon} alt={el.name} />
          <p className="tools__element-text text-m text-center">{el.name}</p>
        </div>
      ))}
    </section>
  );
}
