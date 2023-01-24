const express = require('express');
const path = require('path');
const api = require('./Develop/routes/index');

//Creates a port or defaults to local 3000
const PORT = process.env.PORT || 3001;
const app = express();

//middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));
app.use('/api', api);

// Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

//Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/404.html'))
);

//Making sure the app is listening on an certain port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
