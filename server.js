require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log('server running'));

//dans un premier temps j'utilise gmail mais peut ètre modifiié par la suite
const gmailPass = process.env.GMAIL_PASS;
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kurulimpah@gmail.com',
        pass: gmailPass,
    },
});

//gestion des erreurs
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('ready to send');
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: 'Kurulimpah@gmail.com',
        subject: 'Contact Form Submission',
        html: `<p>Nom: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: 'ERREUR' });
        } else {
            res.json({ status: 'Message envoyé' });
        }
    });
});