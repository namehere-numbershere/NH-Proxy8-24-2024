const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'https://nhmathproblems.koyeb.app'
}));

app.get('/data', (req, res) => {
    res.json({ message: 'CORS enabled!' });
});

app.listen(3000, () => {
    console.log({message: 'Server running on port 3000'});
});


