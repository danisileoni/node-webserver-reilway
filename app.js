import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import dotenv from "dotenv";
dotenv.config();


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Daniele Sileoni',
    titulo: 'Curso de Node'
  });
});


app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Daniele Sileoni',
    titulo: 'Curso de Node'
  })
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Daniele Sileoni',
    titulo: 'Curso de Node'
  });
});

app.get('*', (req, res) => {
  res.send('404 | page not found');
});

app.listen(process.env.PORT);