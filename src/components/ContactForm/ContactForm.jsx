import './ContactForm.scss';
import { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState("Envoyer");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Envoi...');
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch('http://localhost:5000/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Envoyer");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <div className='contact' id='contact'>
        <p className='contact-title'>Pour me contacter:</p>
        <form onSubmit={handleSubmit} className='contact-form'>

                <label htmlFor='name'>Nom:</label>
                <input type='text' id='name' required placeholder='Nom'/>

                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' required placeholder='Email' />

                <label htmlFor='message'>Message:</label>
                <textarea id='message' required placeholder='Votre message...' />

            <button type='submit'>{status}</button>
        </form>
        </div>
    );
};

export default ContactForm;