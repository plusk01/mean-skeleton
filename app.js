/******************************************************************************
 *                          MEAN Skeleton Example
 ******************************************************************************
 * Here is some information about my app.
 *
 * This app also exposes a RESTful API for data manipulation.
 *
**/

// ----------------------------------------------------------------------------
// Requires
// ----------------------------------------------------------------------------
var express     = require('express');               // Easy API routing
var app         = express();                        // Create the app
var mongoose    = require('mongoose');              // DB Engine for Mongo
var socketio    = require('socket.io');             // socketio for real time communication
var bodyParser  = require('body-parser');           // Parses POST JSON automagically
var morgan      = require('morgan');                // Logging for dev
var path        = require('path');                  // filesystem goodies

var api         = require('./app/api');             // API routes
var publicAPI   = require('./app/api/public');      // Public API routes
var routes      = require('./app/routes')           // HTML public routes (views)
var socket      = require('./app/socket');          // socket handler
var database    = require('./config/database');     // database configs

var port        = process.env.PORT || 8080;         // If no env var set, DEV mode

// ----------------------------------------------------------------------------
// Configuration
// ----------------------------------------------------------------------------

global.__base = __dirname + '/';                    // so child modules can access root

mongoose.connect(database.url);
mongoose.connection.once('open', function() { console.log('DB Connected!'); });

app.set('view engine', 'jade');                     // Tell Node to use Jade
app.set('views', __dirname + '/app/views');         // Tell Node where the templates are

app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'));                             // For request logging

// ----------------------------------------------------------------------------
// Custom Middleware
// ----------------------------------------------------------------------------

// Basic Auth: This is an example of the basic-auth npm package.
// app.use(require('./app/middleware/basic-auth')());           // Basic auth

// ----------------------------------------------------------------------------
// Public Routes
// ----------------------------------------------------------------------------

app.use(express.static(path.join(__dirname, 'public')));        // for the HTML5/JS app
app.use('/uploads', express.static(__dirname + '/uploads'));    // for files/images

app.use('/api', publicAPI);                                     // public API for authentication

/* Routes (views) */
app.get('/', routes.index);
app.get('/admin', routes.admin)                                 // An admin page that you want to protect
app.get('/day/:day', routes.dayAlbum)

// ----------------------------------------------------------------------------
// Authentication Middleware
// ----------------------------------------------------------------------------

app.use(require('./app/middleware/jwt-auth')());                // JWT auth

// ----------------------------------------------------------------------------
// Private Routes
// ----------------------------------------------------------------------------

app.use('/api', api);                                           // all secure API requests will be http://host.com/api/...

// ----------------------------------------------------------------------------
// Listen (start app: `node app.js`)
// ----------------------------------------------------------------------------

var io = socketio.listen(app.listen(port));
console.log('Server started on port ' + port);

// ----------------------------------------------------------------------------
// Socket.io Event Handler
// ----------------------------------------------------------------------------

socket.handle(io);