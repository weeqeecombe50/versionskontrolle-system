const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to our version control system! For more information, please refer to the documentation on our website.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});