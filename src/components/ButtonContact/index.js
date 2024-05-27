import "./styles.css";

export default function Button({ toggleContact, openContact }) {
  const textButton = openContact === false ? "Contacto" : "Cerrar";
  const buttonClose =
    openContact === false
      ? "button-contact text-m"
      : "button-contact text-m button-contact--close";

  return (
    <div className={buttonClose}>
      <button onClick={toggleContact} className="buttcon-contact--text text-m">
        {textButton}
      </button>
    </div>
  );
}
