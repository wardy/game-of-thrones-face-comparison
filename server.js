const express = require('express');
const app = express();

// Server Config
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

// Middleware
app.use('/build', express.static('build'));
app.use('/styles', express.static('src/styles'));

app.get('*', function(req, res) {
  res.render('index.html')
});

const server = app.listen(process.env.PORT || 8000, function() {
  console.log(`Server is running on ${server.address().port}`)
});