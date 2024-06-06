const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connessione al database MongoDB
mongoose.connect('mongodb+srv://progettoweb:ciao1@cluster0.nmdyu3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'Errore durante la connessione al database:'));
//db.once('open', () => {
//    console.log('Connessione al database stabilita');
//});

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};
// Definizione dello schema e del modello utente
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Inizializza l'app Express
const app = express();

// Configura il middleware per analizzare il corpo delle richieste
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route per la registrazione dell'utente
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Crea un nuovo utente
    const newUser = new User({
        username: username,
        email: email,
        password: password
    });

    // Salva l'utente nel database
    newUser.save((err, user) => {
        if (err) {
            console.error('Errore durante il salvataggio dell\'utente:', err);
            res.status(500).send('Errore durante la registrazione dell\'utente');
        } else {
            console.log('Utente registrato con successo:', user);
            res.status(200).send('Registrazione completata con successo');
        }
    });
});

// Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});
