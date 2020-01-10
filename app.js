const express = require('express');
const http = require('http');
const path = require('path');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

// node server port
const PORT = 6000;
const app = express();
const uploadRouter = require('./upload');
app.use(bodyparser.json());
app.use(cookieParser());

const httpServer = http.createServer(app);

app.use('/upload', uploadRouter);

// bind port
httpServer.listen(PORT, () => {
  console.log(`http start port:${PORT}`);
});
