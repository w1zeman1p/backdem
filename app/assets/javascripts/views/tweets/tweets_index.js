BackboneDemo.Views.TweetsIndex = Backbone.View.extend({
  template: JST['tweets/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  events: {
    'click button': 'doThing'
  },


  doThing: function () {
    console.log('doing the damn thing');
  },

  // deleteTweet: function (event) {
  //   var tweet = this.collection.get($(event.currentTarget).data('id'));
  //    // find the tweet in thecollection
  //   console.log(tweet);
  //   tweet.destroy();
  //   // destroy it
  // },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function(tweet) {
      var view = new BackboneDemo.Views.TweetsIndexItem({
        model: tweet
      });
      this.$('ul').append(view.render().$el);
    }, this);

    return this;
  },
});
