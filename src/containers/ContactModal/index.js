import SocialIcons from "../../components/SocialIcons";
import ButtonContact from "../../components/ButtonContact";
import "./styles.css";

export default function ContactModal() {
  return (
    <div className="contact-modal-container">
      <div className="contact-modal">
        <h1 className="contact-modal__title text-l text-center">CONTACTO</h1>
        <p className="contact-modal__text text-m text-center">
          ¡No dudes en escribirme! a mi correo electrónico, siempre estoy
          atento.
        </p>
        <ButtonContact />
        <p className="contact-modal__text text-m text-center">
          También puedes hacerlo a través de mis redes sociales, conesto a
          través de ellas. Sin embargo, no soy muy activo.
        </p>
        <SocialIcons />
      </div>
    </div>
  );
}
