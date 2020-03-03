const path = require('path');

const express = require('express');

const app = express();
const port = 3001;
const buildDir = path.resolve(__dirname, 'build');

app.use(express.static(buildDir));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(buildDir, 'index.html'));
});

app.listen(port, () => console.log(`Server listening on localhost:${port}`));
