const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname + '/home.html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/course1', (req, res) => {
  res.sendFile(path.join(__dirname + '/course1.html'));
});

app.get('/course2', (req, res) => {
  res.sendFile(path.join(__dirname + '/course2.html'));
});

app.get('/enroll', (req, res) => {
  res.sendFile(path.join(__dirname + '/enroll.html'));
});

app.get('/done', (req, res) => {
  res.sendFile(path.join(__dirname + '/done.html'));
});

app.get('/enroll2', (req, res) => {
  res.sendFile(path.join(__dirname + '/enroll2.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
