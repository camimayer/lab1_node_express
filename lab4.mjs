import express from 'express';
const app = express();

app.use((req, res, next) => {
    var date = new Date();
    console.log('Date:', date.toLocaleDateString());
    console.log('Time:', date.getHours(), ":", date.getMinutes(), ":", date.getSeconds());  
    console.log('Type:', req.method);  
    next();
});
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});