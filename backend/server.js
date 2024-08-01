const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const formData = req.body;

  // Log the form data to the console
  console.log('Form Data:', formData);

  // Log environment variables to verify they are being loaded correctly
  console.log('GMAIL_USER:', process.env.SMTP_MAIL);
  console.log('GMAIL_PASS:', process.env.SMTP_PASS);
  console.log("Gmail data",formData.email)

  // Configure the Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure:false,
    auth: {
      user: formData.email,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: formData.email, // Ensure this email is the same as the user email in transporter
    to: 'kashishkurra@example.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${formData.name}
      Organization: ${formData.organization}
      Email: ${formData.email}
      Contact: ${formData.contact}
      Website: ${formData.website}
      Services: ${formData.services ? formData.services.join(', ') : ''}
      Other Service: ${formData.otherService || ''}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email: ' + error.message);
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
