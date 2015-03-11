App.setupForTesting();
App.rootElement = '#ember-tests';
App.injectTestHelpers();

module('Integration: Transitions', {
    teardown: function() {
        App.reset();
    }
});

test('root lists first page of posts', function() {
    expect(1);
    visit('/posts');
    andThen(function() {
        equal(find('ul.posts li').length, 3, 'The first page should have 3 posts');
    });
});
