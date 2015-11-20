The 'models' Directory
======================

This app uses `mongoose` to create models for MongoDB. Typically, only put one model per file.

An example of what a file might look like:

```javascript
// Require mongoose so you can get access to schemas and models
var mongoose = require('mongoose');

// module.exports your model so other people can access it
module.exports = mongoose.model('Picture', mongoose.Schema({
        uploaded: { type: Date, default: Date.now },
        tags: [String],
        description: String,
        path: String
    });
);
```

The `mongoose.Schema({...})` part is for defining what your model looks like.
The `mongoose.model()` part hooks up the name of the model to what the schema is.

A model can then be included in other files, like so:

```javascript
var Picture = require('models/Picture');
```

------------------------

## Using bcrypt to Hash User Passwords ##

See API/User Authentication in the main README.

------------------------

### See Also ###

+ [Example NodeJS / Mongoose / Express app](https://gist.github.com/fwielstra/1025038#file-post-js)
+ [Mongoose Schema Types](http://mongoosejs.com/docs/schematypes.html)