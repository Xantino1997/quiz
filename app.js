const express = require('express');
const app = express();

// Inicia el servidor en el puerto especificado
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor init ${port}`);
});


app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');

// app.listen(port, ()=>{
//     console.log('listening on port: '+ port);
// });

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {tittle :"We don't all ignore the same things"})
});

app.get('/game', (req, res) => {
    res.render('game', {titleGame :'Select the category'})
});

app.get('/playthegame', (req, res) => {
    res.render('playthegame', {titlePlay:'Let play now'})
});
app.get('/playtheart', (req, res) => {
    res.render('playtheart', {titlePlay:'Let play now'})
});
app.get('/playEntre', (req, res) => {
    res.render('playEntre', {titlePlay:'Let play now'})
});

app.get('/playSport', (req, res) => {
    res.render('playSport', {titlePlay:'Let play now'})
});

app.get('/playHistory', (req, res) => {
    res.render('playHistory', {titlePlay:'Let play now'})
});

app.get('/playCiencia', (req, res) => {
    res.render('playCiencia', {titlePlay:'Let play now'})
});

app.get('/playMusic', (req, res) => {
    res.render('playMusic', {titlePlay:'Let play now'})
});

