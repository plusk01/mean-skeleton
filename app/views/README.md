The `views` Directory
=====================

This project uses Jade, which allows you to make different partials that can be dynamically created with data from the database or other dynamic content.

Jade allows you to extend other jade partials. For example:

**layout.jade**
```html
doctype
html
  head
    title MEAN Skeleton

    link(rel='stylesheet', href='/lib/bootstrap/dist/css/bootstrap.min.css')
    
  body
    block body

    script(src='/lib/jquery/dist/jquery.min.js')
```

The `block body` element is special Jade syntax that means, "Hey Jade! In the future, there are going to be other partials that will want to extend this document and replace `block body` with their own content, got it?"

For example, `index.jade` will use `layout.jade` and add it's own content to it using the `extends layout` element.

**index.jade**
```html
extends layout

block body
  h1 Welcome to the Example Project!
```

You can have multiple partials that extend that same `layout.jade`. In this way, you don't have to have a bunch of boring HTML scaffolding in all of your files:

**admin.jade**
```html
extends layout

block body
  div.container-fluid
    form(id='uploadForm',enctype='multipart/form-data',action='/api/days',method='post')
      div.form-group
        label(for='title') Day Title
        input.form-control(type='text',id='title',name='title')
```

------------------------

### See Also ###

+ [Jade Lang Example](http://jade-lang.com/)
+ [Language Reference](http://jade-lang.com/reference/attributes/)