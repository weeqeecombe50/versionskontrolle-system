const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const versions = [
    { version: '1.0.0', releaseDate: '2023-01-01' },
    { version: '1.1.0', releaseDate: '2023-06-01' },
];

app.get('/api/versions', (req, res) => {
    res.json(versions);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});