const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/versions', (req, res) => {
    // Here would be the code to retrieve the versions
    // TODO: Implement version retrieval logic
    res.send('Versions list');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});