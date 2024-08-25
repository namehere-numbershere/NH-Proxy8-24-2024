import express from 'express'
const app = express();
console.log("E")

app.get('/data', (req, res) => {
    res.json({ message: 'enabled!' });
    console.log("Test")
});

app.listen(8080, () => {
    console.log({message: 'Server running on port 8080'});
});


