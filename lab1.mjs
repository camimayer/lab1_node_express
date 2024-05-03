// node + nome do projeto = rodar a app
// npm init 
// npm install server


import  { createServer } from 'http';

const server =  createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});