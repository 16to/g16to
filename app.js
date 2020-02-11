const express = require('express');
const http = require('http');
const path = require('path');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

// node server port
const PORT = 3003;
const app = express();
const uploadRouter = require('./upload');
app.use(bodyparser.json());
app.use(cookieParser());

const httpServer = http.createServer(app);

app.use('/upload', uploadRouter);

// set dist
app.use(express.static(path.join(__dirname, './')));

// bind port
httpServer.listen(PORT, () => {
  console.log(`http start port:${PORT}`);
});
