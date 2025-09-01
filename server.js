const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/versions', (req, res) => {
    // Hier würde der Code zum Abrufen der Versionen stehen
    res.send('Liste der Versionen');
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});