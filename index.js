const express = require('express')
const app = express()
var path = require('path');
require("dotenv").config();

//ensure database is connected
require('./config/database.config')

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Mealplannr'
app.use(
  session({
    secret: 'ivanas-secret',
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000, //60 sec * 60 min * 24hrs = 1 day (in milliseconds)
    },
    store: new MongoStore({
      url: MONGODB_URI,
      // mongooseConnection: mongoose.connection
      //time to live (in seconds)
      ttl: 60 * 60 * 24,
      autoRemove: 'disabled',
    }),
  })
);

//A library that helps us log the requests in the console
const logger = require('morgan');
app.use(logger('dev'));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Use body parser. To be able to parse post request information
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()) //crucial for post requests from client

app.use(express.static(path.join(__dirname, 'public')));

// allow access to the API from different domains/origins
const cors = require('cors')
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))

//Register routes
const authRoutes = require('./routes/auth.routes');
app.use('/api', authRoutes);

// cloudinary route:
const fileUploads = require('./routes/file.upload.routes');
app.use('/api', fileUploads);

const mealplanRoutes = require('./routes/mealplan.routes');
app.use('/api', mealplanRoutes);

const recipeRoutes = require('./routes/recipes.routes');
app.use('/api', recipeRoutes);

const shoppingList = require('./routes/shopping.list.routes');
app.use('/api', shoppingList)

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

// Start the server to begin listening on a port
// make sure you don't run it on port 3000 because 
// your react app uses port 3000. 
app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
    console.log('Server is running')
})


