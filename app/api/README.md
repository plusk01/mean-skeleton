The `api` Directory
===================

This folder holds all API related routes/functions.

Notice that the file `index.js` has all the routes and uses an express router to make life more simple:

```javascript
var router = express.Router()
```

That router then must be exported (typically at the end of the file) so that the file requiring it (probably `app.js`) can know what to do when a request is sent to the API:

```javascript
module.exports = router;
```

Also, notice that because the file is called `index.js` and is inside its own directory, it can be required as simply the directory name (as seen on line 20 of `app.js`):

```javascript
var api = require('api');
```