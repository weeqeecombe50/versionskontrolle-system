const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Willkommen zum Versionskontrollsystem!');
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});