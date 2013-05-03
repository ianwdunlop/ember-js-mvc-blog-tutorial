App = Ember.Application.create({
  LOG_TRANSITIONS: true	
});

App.Router.map(function() {
  this.resource('posts');
  this.resource('post', { path: 'posts/:post_id' }, function() {
  });
});
