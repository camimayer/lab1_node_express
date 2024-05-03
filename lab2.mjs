// npm install express
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Worls with Express!');
});

app.listen(3000, () => {
    console.log('Express server listening on port 3000');
});