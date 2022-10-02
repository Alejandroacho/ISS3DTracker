const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));
app.use('/js/', express.static(path.join(__dirname, 'node_modules/three/examples/js')));
app.use('/libs/', express.static(path.join(__dirname, 'node_modules/three/examples/js/libs')));
app.use('/addons/', express.static(path.join(__dirname, 'node_modules/three/addons')));

app.listen(8000, () =>
  console.log('Visit http://127.0.0.1:8000')
);