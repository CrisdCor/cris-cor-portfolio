import "./styles.css";

export default function Button({ toggleContact, openContact }) {
  const textButton = openContact === false ? "Contacto" : "X";
  const handleButton =
    openContact === false
      ? "button-contact--text text-m"
      : "button-contact--text text-m button-contact--close";

  return (
    <div className="button-contact">
      <button onClick={toggleContact} className={handleButton}>
        {textButton}
      </button>
    </div>
  );
}
