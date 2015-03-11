Ember JS: MVC in the browser tutorial
=====================================

Now updated to [Ember 1.10](http://emberjs.com/blog/2015/02/07/ember-1-10-0-released.html)

The tutorials below now contain some legacy code but the basic idea is still sound. Some  of the handlebars helpers have [changed](http://emberjs.com/guides/deprecations/). For example, the built in `{{View}}` helpers have different syntax.

Instead of

```handlebars
{{view Ember.TextArea}}
```

you should now use

```handlebars
{{textarea}}
```
The context switching version of the `{{each}} helper has been deprecated and you should now specify the context. So instead of

```handlebars
{{#each}}
    {{title}}
    {{text}}
{{/each}}
```

use the following syntax


```handlebars
{{#each post in model}}
    {{post.title}}
    {{post.text}}
{{/each}}
```

Ember is also transitioning towards the HTMLBars templating engine and now requires the [ember-template-compiler](http://builds.emberjs.com/release/ember-template-compiler.js). It can be quite confusing finding the different components you require. A good guide is to look at http://builds.emberjs.com. I have used the `release` channel for [ember](http://builds.emberjs.com/release/ember.js) and the `beta` one for [ember data](http://builds.emberjs.com/beta/ember-data.js).  Ember now uses Handlebars [version 2.0](http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v2.0.0.js).

Part 1 - routing
----------------

Here we look at the basic structure of an ember application, comparing it to a
basic rails one. We examine how routes are defined, how it differs to rails and 
how to examine them. See http://dev.mygrid.org.uk/blog/?p=46

Part 2 - templates
------------------

We add some templates for Posts index and each individual Post. We add a store,
a Post model and some fixtures data to render in the templates. We look at how
we get data from a store to a template via a route. See http://dev.mygrid.org.uk/blog/?p=75

Part 3 - nested resources
------------------

We create a comments model and routes and link it to the post model. We add routes, templates
and controller actions to create new comments
See http://dev.mygrid.org.uk/blog/?p=97

Licence
-------
Available under the MIT licence, see the attached licence.txt file for details
