const express = require('express');
const app = express();
const request = require('request');

const characterJSON = require('./src/face-lists/game-of-thrones.json');

app.set('port', process.env.PORT || 8000);

const rootUrl = `http://localhost:${app.get('port')}`;

// Server Config
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

// Middleware
app.use('/build', express.static('build'));
app.use('/styles', express.static('src/styles'));

app.get('/face-checker', (req, res, next) =>  {
  request(`${rootUrl}/character-json`, (err, response, body) => {
    if (err) return next(err);
    console.log(response, body);
    res.send('yee haw I\'m a cowboy!');
  })
})

app.get('/character-json', (req, res) => {
  res.send(characterJSON);
});

app.get('*', (req, res) =>  {
  res.render('index.html')
});

const server = app.listen(app.get('port'), () => {
  console.log(`Server is running on ${server.address().port}`)
});

module.exports = app;