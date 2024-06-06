const express = require('express');
const mongoose = require('mongoose');

// Connessione al database MongoDB
const dbUrl = process.env.DB_URL || 'mongodb+srv://progetto:ciao@cl.8mgpwsf.mongodb.net/?retryWrites=true&w=majority&appName=Cl';

mongoose.connect(dbUrl)
    .then(() => console.log('Connessione al database stabilita'))
    .catch((error) => console.error('Errore durante la connessione al database:', error.message));

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route per la registrazione dell'utente
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Crea un nuovo utente
    const newUser = new User({
        username,
        email,
        password
    });

    try {
        const user = await newUser.save();
        console.log('Utente registrato con successo:', user);
        res.status(200).send('Registrazione completata con successo');
    } catch (err) {
        console.error('Errore durante il salvataggio dell\'utente:', err);
        res.status(500).send('Errore durante la registrazione dell\'utente');
    }
});

// Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});
