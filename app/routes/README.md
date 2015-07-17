The `routes` Directory
======================

This folder holds all of the non-API (HTML) routes.

For example, if a client browser hits your server at `http://myserver.com/`, line 58 of `app.js` (`app.get('/', routes.index)`) will send your app to the `routes/index.js` file and look for `module.exports.index`, which may look like:

```javascript
module.exports.index = function(req, res) {
  res.render('index');
};
```

So, this particular route responds with a Jade rendering of the `index.jade` partial. Jade knows that `'index'` means `app/views/index.jade` because of `app.js:36` where views is set:

```javascript
app.set('views', __dirname + '/app/views');
```