import React, { useState, useContext } from 'react';
import ValidationContext from '../../contexts/ValidationContext';
import useErrors from '../../hooks/useErrors';
import Recaptcha from 'react-recaptcha';
import { mask, unMask } from "remask";
import './style.css';

export default function ContactForm({onSubmit}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const validations = useContext(ValidationContext);
    const [errors, validateInput, onloadCallback, verifyCallback, canSubmit] = useErrors(validations);


    return (
        <div className="contact-form">
            <div className="form-wrapper">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    if(canSubmit()){
                        onSubmit({name, email, phone, message});
                    }
                }}>
                        <div className="input-block" id="name-block">
                            <input
                                required
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Seu Nome"
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                                onBlur={validateInput}
                            />
                            <div className="error">{errors.name.text}</div>
                        </div>
                        <div className="input-block" id="email-block">
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="E-mail"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                onBlur={validateInput}
                            />
                            <div className="error">{errors.email.text}</div>
                        </div>
                        <div className="input-block" id="phone-block">
                            <input
                                required
                                type="text"
                                id="phone"
                                name="phone"
                                value={phone}
                                placeholder="Telefone"
                                onChange={(event) => {
                                    setPhone(mask(unMask(event.target.value), ['(99)99999-9999']));
                                }}
                                onBlur={validateInput}
                            />
                            <div className="error">{errors.phone.text}</div>
                        </div>
                        <div className="input-block" id="message-block">
                            <textarea
                                required
                                id="message"
                                name="message"
                                value={message}
                                placeholder="Mensagem"
                                cols="30"
                                rows="8"
                                onChange={(event) => {
                                    setMessage(event.target.value);
                                }}
                                onBlur={validateInput}
                            />
                            <div className="error">{errors.message.text}</div>
                        </div>
                    <div className="input-block" id="recaptcha-block">
                        <Recaptcha
                            sitekey="6LfmvssaAAAAAGqMwHayAvCF-x-QSFZ8ZOKPDXWo"
                            render="explicit"
                            verifyCallback={verifyCallback}
                            onloadCallback={onloadCallback}
                        />
                        <button
                            className="button"
                            type="submit"
                            id="contact-form-btn"
                            >ENVIAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}