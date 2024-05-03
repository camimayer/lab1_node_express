import express from 'express';
const app = express();
var users = [
    {
      "nome": "João Silva",
      "email": "joao.silva@example.com"
    },
    {
      "nome": "Maria Santos",
      "email": "maria.santos@example.com"
    },
    {
      "nome": "Carlos Oliveira",
      "email": "carlos.oliveira@example.com"
    },
    {
      "nome": "Ana Costa",
      "email": "ana.costa@example.com"
    },
    {
      "nome": "Pedro Fernandes",
      "email": "pedro.fernandes@example.com"
    }
  ];
  

app.get('/api/users', (req, res) => {
    res.send({"users":users});
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});