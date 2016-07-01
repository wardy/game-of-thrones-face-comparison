const express = require('express');
const app = express();
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.get('*', function(req, res) {
  res.render('index.html')
});

const server = app.listen(process.env.PORT || 8000, function() {
  console.log(`Server is running on ${server.address().port}`)
});