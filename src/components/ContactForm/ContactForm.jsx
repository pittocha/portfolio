import './ContactForm.scss';
import { useState } from 'react';
import mailIllustration from '../../assets/banque-d-images-gratuites-libres-de-droits613-removebg-preview.png'

const ContactForm = () => {
    const [status, setStatus] = useState("Envoyer");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Envoi...');
        //récupération des entrés du formulaire
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const message = e.target.elements.message.value;
        
        let details = {
            name: name,
            email: email,
            message: message,
        };
        //try catch pour l'envoi du formulaire
        try {
        let response = await fetch('/.netlify/functions/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        });
        setStatus("Envoyer");
        // gestion de la reponse de la requette
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
        } else {
            alert("Erreur lors de l'envoi de l'email")
        }
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email:", error);
            alert("Erreur lors de l'envoi de l'email");
        }
    };
    return (
        <div id='contact'>
        <p className='contact-title'>Pour me contacter:</p>
        <div className='contact'>
        <div className='contact-illustration'>
        <p className='mail'>par mail: <a href='mailto:kurulimpah@gmail.com'> kurulimpah@gmail.com</a> ou via le formulaire</p>
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