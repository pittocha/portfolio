// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const nodemailer = require('nodemailer');

const handler = async (event) => {
  try {
    // Parse the request body
    const requestBody = JSON.parse(event.body);

    // extract form data
    const name = requestBody.name;
    const email = requestBody.email;
    const message = requestBody.message;

    // configuration de nodemailer
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'kurulimpah@gmail.com',
          pass: process.env.GMAIL_PASS,
      },
    });

    // Preparer mail option
    const mailOption = {
      from: name,
      to: 'kurulimpah@gmail.com',
      subject: 'Nouveau message du formulaire du portfolio',
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Envoi du mail
    await transport.sendMail(mailOption);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email envoyé'})
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}

module.exports = { handler }
