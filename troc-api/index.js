const express = require('express');
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(expressMongoDb('mongodb://localhost/troc'));
app.use(bodyParser.json());
app.use(cors());


app.get('/usuario', (req, res) => {
    req.db.collection('usuario').find().toArray((err, dados) => {
      res.send(dados);
    });
  });

  app.post('/usuario', (req, res) => {
    req.db.collection('usuario').insert(req.body,function(erro, dados){
        if(erro){
            res.status(500).send('Um erro ocorreu');
            return;
        }
    });
});

  app.get('/login', (req, res) => {
    req.db.collection('usuario').find().toArray((err, dados) => {
      res.send(dados);
    });
  });

  app.get('/oferta', (req, res) => {
    req.db.collection('oferta').find().toArray((err, dados) => {
      res.send(dados);
    });
  });

  app.get('/produto', (req, res) => {
    req.db.collection('produto').find().toArray((err, dados) => {
      res.send(dados);
    });
  });

  app.post('/produto', (req, res) => {
    req.db.collection('produto').insert(req.body,function(erro, dados){
        if(erro){
            res.status(500).send('Um erro ocorreu');
            return;
        }
    });
});

app.listen(3030, () => {
    console.log('Servidor rodando na porta 3030');
  });