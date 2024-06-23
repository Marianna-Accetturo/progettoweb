const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose");
const User = require("/controllers/models/User");

const db_uri ="mongodb+srv://web:web@sito.v46sfqa.mongodb.net/?retryWrites=true&w=majority&appName=sito"

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static("static"))

mongoose.connect(db_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connessione al DB effettuata");
    
    async function inserisciDatiDaFile(file, Modello) {
        try {
            const data = await fs.readFile(file, 'utf8');
            const jsonData = JSON.parse(data);

            await Modello.insertMany(jsonData);
            console.log(`Inseriti ${jsonData.length} documenti da ${file} in MongoDB`);
        } catch (err) {
            console.error(`Errore durante l'inserimento dei dati da ${file}:`, err);
        }
    }

    inserisciDatiDaFile('/db/trama.json', Trama);

    inserisciDatiDaFile('/db/utenti_video.json', Video);

    inserisciDatiDaFile('/db/utenti.json', User);

}).catch(err => console.error(err));
module.exports = connectDB;

