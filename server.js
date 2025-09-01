const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const versions = [
    { version: '1.0.0', releaseDate: '2023-01-01' },
    { version: '1.1.0', releaseDate: '2023-06-01' },
];

app.get('/api/versions', (req, res) => {
    res.json(versions);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});