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
var routes      = require('./app/routes')           // HTML public routes
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

app.use(require('./app/middleware/basic-auth')());  // Basic auth

// ----------------------------------------------------------------------------
// Routes
// ----------------------------------------------------------------------------

app.use(express.static(path.join(__dirname, 'public')));        // for the HTML5/JS app
app.use('/uploads', express.static(__dirname + '/uploads'));    // for files/images

app.use('/api', api);                                           // all API requests will be http://host.com/api/...

/* Routes */
app.get('/', routes.index);
app.get('/admin', routes.admin)                                 // An admin page that you want to protect
app.get('/day/:day', routes.dayAlbum)

// ----------------------------------------------------------------------------
// Listen (start app: `node app.js`)
// ----------------------------------------------------------------------------

app.listen(port);
console.log('Server started on port ' + port);

// ----------------------------------------------------------------------------
// Socket.io Event Handler
// ----------------------------------------------------------------------------

socket.handle(io);