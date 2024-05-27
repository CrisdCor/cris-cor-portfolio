import SocialIcons from "../../components/SocialIcons";
import "./styles.css";

export default function ContactModal(props) {
  return (
    <div className="contact-modal-container">
      <div className="contact-modal">
        <h1 className="contact-modal__title text-l text-center">CONTACTO</h1>
        <p className="contact-modal__text text-m text-center">
          ¡No dudes en escribir! A mi correo electrónico.
        </p>
        <p className="contact-modal__email text-m">
          cristiandavid.corrales@gmail.com
        </p>
        <div className="button-email-container">
          <button className="button-email__button text-m text-center">
            Copiar email
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
