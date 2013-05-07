App = Ember.Application.create({
  LOG_TRANSITIONS: true	
});

App.Router.map(function() {
  this.resource('posts');
  this.resource('post', { path: 'posts/:post_id' }, function() {
  });
});

App.PostsRoute=Ember.Route.extend({
  model: function(){
    return App.Post.find();
  }
});

App.PostIndexRoute=Ember.Route.extend({
  model: function(params) {
    return this.modelFor('post');
  }
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Post=DS.Model.extend({
  title: DS.attr('string')
});

App.Post.FIXTURES=[{ id: "1", title: "First Post" }, { id: "2", title: "Second Post" }, { id: "3", title: "Third Post" }];
