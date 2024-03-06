import './ContactForm.scss';
import { useState } from 'react';
import mailIllustration from '../../assets/banque-d-images-gratuites-libres-de-droits613-removebg-preview.png'

const ContactForm = () => {
    const [status, setStatus] = useState("Envoyer");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Envoi...');
        
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const message = e.target.elements.message.value;
        
        let details = {
            name: name,
            email: email,
            message: message,
        };
        
        let response = await fetch('/.netlify/functions/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(details).toString(),
        });
        setStatus("Envoyer");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <div id='contact'>
        <p className='contact-title'>Pour me contacter:</p>
        <div className='contact'>
        <div className='contact-illustration'>
        <p className='mail'>par mail: <a href='kurulimpah@gmail.com'> kurulimpah@gmail.com</a> ou via le formulaire</p>
        <img src={mailIllustration} className='mail-img' alt='illustration mail'/>
        </div>
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
        </div>
    );
};

export default ContactForm;