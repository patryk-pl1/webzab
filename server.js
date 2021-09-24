const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const SMTPConnection = require('nodemailer/lib/smtp-connection');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.static('./'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/public/services.html', (req, res) => {
    res.sendFile(__dirname + "/public/services.html")
})

app.get('/public/about.html', (req, res) => {
    res.sendFile(__dirname + "/public/about.html")
})

app.get('/public/contact.html', (req, res) => {
    res.sendFile(__dirname + "/public/contact.html")
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.wp.pl',
        port: 465,
        auth: {
            user: process.env.USER,
            pass: process.env.USER_PASS
        }
    })

    const mailOptions = {
        from: 'WebZab <pat3216@wp.pl>',
        to: 'pat3216@wp.pl',
        subject: 'Podanie o kontakt WebZab',
        text: 'Wiadomość: ' + req.body.message + ' Imię: ' + req.body.name +
            ' Telefon: ' + req.body.phone + ' email: ' + req.body.email + 
            ' Firma: ' + req.body.company
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})