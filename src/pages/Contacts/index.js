import './style.css';
import axios from 'axios';
import { useState } from 'react';
import { validateEmail, validateMessage, validateName, validatePhone } from '../../models/Validations';
import ValidationContext from '../../contexts/ValidationContext';

import ContactForm from '../../components/ContactForm';
import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contacts() {

    const [container, setContainer] = useState(initial);

    function onSubmit(values) {
        setContainer(<Thanks />);
        window.scrollTo(0,430);
        //axios.post(``, values)
        //.then((response)=>{});
    }

    function initial() {
        return (
            <>
                <ValidationContext.Provider
                    value={{
                        name: validateName,
                        email: validateEmail,
                        phone: validatePhone,
                        message: validateMessage
                    }}>
                    <ContactForm onSubmit={onSubmit} />
                </ValidationContext.Provider>
            </>
        );
    }

    function Thanks() {
        return (
            <div className="contact-thanks">
                <h2>Sua mensagem foi enviada!<br></br></h2>
                <h4>Em breve retornarei o contato. Obrigada!</h4>
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <h2>Contacts</h2>
                <div className="line"></div>
                <p>Você pode entrar em contato comigo através de qualquer uma das minhas redes sociais</p>
                <div className="contact-icons">
                    <a href="https://github.com/FabianaMendes" target="new">
                        <i><FontAwesomeIcon icon={faGithub} /></i>
                    </a>
                    <a href="https://www.instagram.com/fabbymendes" target="new">
                        <i><FontAwesomeIcon icon={faInstagram} /></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fabianamoreiramendes" target="new">
                        <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5534988844224" target="new">
                        <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                    </a>
                </div>
                <p>ou se preferir através do formulário abaixo:</p>
                <div className="form-container">
                    {container}
                </div>
            </div>
        </>
    );
}