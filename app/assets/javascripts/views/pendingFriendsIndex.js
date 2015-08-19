Fridgeslam.Views.PendingFriendsIndex = Backbone.View.extend({
  template: JST['friendships/pending_requests'],

  className: 'requests-list-container',


  initialize: function () {
    this.listenTo(this.collection, 'sync add remove update destroy', this.render);
  },

  events: {
    'click .accept-friendship': 'acceptFriend',
    'click .reject-friendship': 'rejectFriend'
  },

  acceptFriend: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    var friendship = new Fridgeslam.Models.Friendship({
      id: $target.data('friendship-id')
    });
    var that = this;
    friendship.set({pending: false});

    friendship.save({}, {
      success: function () {
        that.collection.remove(friendship);
      }
    });
    // this.collection.fetch()
  },

  rejectFriend: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    var friendship = new Fridgeslam.Models.Friendship({
      id: $target.data('friendship-id')
    });
    friendship.destroy();
    this.render();
  },

  render: function () {
    var that = this;
    var content = this.template({
      requestors: that.collection
    });

    this.$el.html(content);
    return this;
  }
});
