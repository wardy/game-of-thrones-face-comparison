const express = require('express');
const app = express();
const request = require('request');

// const Face = require('./face-api');
const Face = require('microsoft-cognitive-services').FaceAPI;

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
    res.send(body);
  })
})

app.get('/character-json', (req, res) => {
  res.send(characterJSON);
});

app.get('/face', (req, res) => {
  const face = new Face('key');
  face.makeRequest('lol',(err, response, body) => {
    res.set('Content-Type', 'application/JSON');
    res.send(body);    
  });
})

app.get('*', (req, res) =>  {
  res.render('index.html')
});

const server = app.listen(app.get('port'), () => {
  console.log(`Server is running on ${server.address().port}`)
});

module.exports = app;