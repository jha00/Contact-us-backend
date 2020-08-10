


const express = require('express');
const path = require('path');
const sendMail = require('./mymail');
const { log } = console;
const app = express();

const PORT = 2050;



app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());




app.post('/email', (req, res) => {
    const { name, email, text } = req.body;
    log('Data: ', req.body);

    sendMail(email, name, text, function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log('Email sent');
        return res.json({ message: 'Email sent' });
    });
});



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'demo.html'));
});


app.get('/email/sent', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'reply.html'));
});


app.listen(PORT, () => log('Server is starting on PORT, ', 8080));