const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const folderRouter = require('./api/routes/folder');
const documentRouter = require('./api/routes/document');

app.use(bodyParser.urlencoded({
    extended: true
  }));

  // parse application/json
app.use(bodyParser.json())

app.use('/folders/', folderRouter);
app.use('/documents', documentRouter);

app.use('/', (req, res, next) => {
    res.status(200).json({
        message: "App is working!"
     });
});

module.exports = app;