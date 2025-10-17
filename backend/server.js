const express = require('express');
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});