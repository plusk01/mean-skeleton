The `public` Directory
======================

This directory houses all of the public files that browsers/users need to be able to access freely. Node does not process these using the request/response model; in fact, they are just freely given when requested.

You tell Node to do this on line 52 of `app.js`:

```javascript
app.use(express.static(path.join(__dirname, 'public'))); 
```

These files are called 'static' files to reflect the fact that Node doesn't process them and they are given to the browser as is.

When you add a frontend dependency using `bower` (i.e., `bower install bootstrap --save`), bower will create a directory called `public/lib` and add the dependency files there. You will still have to add a `<link rel="stylesheet" type="text/css" href="">` or `<script type="text/javascript"></script>` tag to your `app/views/layout.jade`