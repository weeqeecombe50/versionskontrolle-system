const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/versions', (req, res) => {
    // Hier würde der Code zum Abrufen der Versionen stehen
    res.send('Versions list');
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});