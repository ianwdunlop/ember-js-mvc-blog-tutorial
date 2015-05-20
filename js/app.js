var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.resource('posts', function() {
        this.route('new');
    });
    this.resource('post', {
        path: '/posts/:post_id'
    }, function() {
        this.resource('comments', function() {
            this.route('new');
            this.route('create');
        });
        this.route('comment', {
            path: 'comments/:comment_id'
        });
    });
});

App.PostsIndexRoute = Ember.Route.extend({
    model: function() {
        return this.get('store').find('post');
    }
});

App.PostIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('post');
    }
});

App.PostsNewRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('title', null);
        controller.set('text', null);
    }
});

App.CommentsNewRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('text', null);
    }
});



App.CommentsNewController = Ember.Controller.extend({
    needs: 'post',

    text: null,

    actions: {
        save: function() {
            var post = this.get('controllers.post.content');
            var comment = this.get('store').createRecord('comment', {
                post: post,
                text: this.get('text')
            });
            comment.save().then(function(comment) {
                post.get('comments').pushObject(comment);
            });
            this.get('target').transitionTo('post.index');
        }
    }
});

App.PostsNewController = Ember.Controller.extend({

    title: null,
    text: null,

    actions: {
        save: function(post) {
            var me = this;
            var post = this.get('store').createRecord('post', {
                title: this.get('title'),
                text: this.get('text')
            });
            post.save().then(function(post) {
                me.get('target').transitionTo('posts.index');
            });
        }
    }
});

App.ApplicationAdapter = DS.FixtureAdapter;


App.Post = DS.Model.extend({
    comments: DS.hasMany('comment', {
        async: true
    }),
    title: DS.attr('string')
});

App.Comment = DS.Model.extend({
    post: DS.belongsTo('post'),
    text: DS.attr('string')
});

App.Post.FIXTURES = [{
    id: "1",
    title: "First Post",
    comments: [1, 2, 3]
}, {
    id: "2",
    title: "Second Post",
    comments: [4, 5, 6]
}, {
    id: "3",
    title: "Third Post",
    comments: [7, 8, 9]
}];

App.Comment.FIXTURES = [{
    id: "1",
    text: "First Comment"
}, {
    id: "2",
    text: "Second Comment"
}, {
    id: "3",
    text: "Third Comment"
}, {
    id: "4",
    text: "Fourth Comment"
}, {
    id: "5",
    text: "Fifth Comment"
}, {
    id: "6",
    text: "Sixth Comment"
}, {
    id: "7",
    text: "Seventh Comment"
}, {
    id: "8",
    text: "Eighth Comment"
}, {
    id: "9",
    text: "Ninth Comment"
}];
