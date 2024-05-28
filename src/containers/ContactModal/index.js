import { useState } from "react";

import SocialIcons from "../../components/SocialIcons";
import "./styles.css";

export default function ContactModal({ toggleContact, openContact }) {
  const [buttonText, setButtonText] = useState("Copiar correo");
  /**
   * ******************************************************************
   * Apertura y cierre del modal
   * ******************************************************************
   */

  const modalContainerOpen =
    openContact === false
      ? "contact-modal-container contact-modal-container--close"
      : "contact-modal-container contact-modal-container--open";

  const modalOpen =
    openContact === false
      ? "contact-modal contact-modal--close"
      : "contact-modal contact-modal--open";

  /**
   * ******************************************************************
   * Captura del correo electrónico en el portapapeles con la API
   * navigator.clipboard.writeText
   * ******************************************************************
   */

  const copyEmail = () => {
    const emailElement = document.getElementsByClassName(
      "contact-modal__email"
    )[0].textContent;

    navigator.clipboard
      .writeText(emailElement)
      .then(() => {
        setButtonText("¡Copiado!");
        setTimeout(() => setButtonText("Copiar correo"), 1500);
      })
      .catch((error) => {
        console.log("No se copió correctamente el correo", error);
        alert("Error al copiar el correo" + error);
      });
  };

  return (
    <div className={modalContainerOpen}>
      <div className={modalOpen}>
        <h1 className="contact-modal__title text-l text-center">CONTACTO</h1>
        <p className="contact-modal__text text-m text-center">
          ¡No dudes en escribir! A mi correo electrónico.
        </p>
        <p className="contact-modal__email text-m">
          cristiandavid.corrales@gmail.com
        </p>
        <div className="button-email-container">
          <button
            onClick={copyEmail}
            className="button-email__button text-m text-center"
          >
            {buttonText}
          </button>
        </div>
        <p className="contact-modal__text text-m text-center">
          También puedes hablarme a través de mis redes sociales. Te advierto
          que no soy activo en ellas, pero contesto todos los mensajes.
        </p>
        <SocialIcons />
      </div>
    </div>
  );
}
