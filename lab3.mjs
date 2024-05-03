import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/accueil', (req, res) => {
    res.send('Accueil');
});
app.get('/apropos', (req, res) => {
    res.send('A propos');
});
app.get('/contact', (req, res) => {
    res.send('Contact');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});