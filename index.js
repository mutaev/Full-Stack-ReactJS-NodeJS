import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://admin:wwwwww@cluster0.g1ffpe3.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('111 hellr!')
});

app.post('/auth/login', (req, res) => {
  console.log(req.body)

  const token = jwt.sign({
    email: req.body.email,
    fullName: 'Эльдар Мутаев',
  }, 
  'secret123');

  if (req.body.email === 'test@test.ru') {
    const token = jwt.sign(
      {
        email:req.body.email,
        fullName: 'Эльдар Мутаев',
      }
    )
  }

  res.json({
    success: true,
    token,
  });
});

app.listen(4444, (err) => {
  if(err){
    return console.log(err);
  }

  console.log('Server OK');
});