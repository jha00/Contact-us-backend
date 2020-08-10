const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key:'', 
        domain:  ''
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, name, text, cb) => {
    const mailOptions = {
        from: 'faiz732101@gmail.com',
        to: email, 
        name,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;