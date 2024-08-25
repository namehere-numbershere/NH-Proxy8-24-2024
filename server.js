const express = require('express');
const cors = require('cors');
const app = express();
console.log("E")
app.use(cors({
    origin: 'https://nhmathproblems.koyeb.app'
}));

app.get('/data', (req, res) => {
    res.json({ message: 'CORS enabled!' });
    console.log("Test")
});

app.listen(3000, () => {
    console.log({message: 'Server running on port 3000'});
});


