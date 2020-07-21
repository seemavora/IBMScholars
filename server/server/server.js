// import dependencies and initialize express
const path = require('path');
const bodyParser = require('body-parser');
const healthRoutes = require('./routes/health-route');
const swaggerRoutes = require('./routes/swagger-route');
const {app} = require('./constants')

//Import routes
require('./merchants/routes') //Example merchants routes

// enable parsing of http request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes and api calls
app.use('/health', healthRoutes);
app.use('/swagger', swaggerRoutes);

// default path to serve up index.html (single page application)
app.all('', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
});

// start node server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App UI available http://localhost:${port}`);
  console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
});

module.exports = {
  app,
};
