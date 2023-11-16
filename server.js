require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json()); // To parse JSON bodies

app.post('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'Outlook365',
        auth: {
            user: process.env.EMAIL_USER, // Access environment variable
            pass: process.env.EMAIL_PASS  // Access environment variable
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_RECIPIENT, 
        subject: 'New Contact Form Message', 
        text: `You have a new message from ${req.body.firstName} ${req.body.lastName} (${req.body.email}): ${req.body.message}` // Include all form fields
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err);
            res.status(500).send('Error sending email');
        } else {
            console.log(info);
            res.status(200).send('Email Sent Successfully');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
