import express from 'express'
const app = express();
console.log("E")

app.get('/data', (req, res) => {
    res.json({ message: 'CORS enabled!' });
    console.log("Test")
});

app.listen(3000, () => {
    console.log({message: 'Server running on port 3000'});
});


