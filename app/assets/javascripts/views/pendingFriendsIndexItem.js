Fridgeslam.Views.PendingFriendsIndexItem = Backbone.CompositeView.extend({
  template: JST['friendships/pending_requests_index_item'],

  className: 'requests-index-item',

  initialize: function () {
    // debugger
    // this.collection.fetch();
    // this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
    this.$el.on('click', function () {
      event.stopPropagation();
    });
  },

  events: {
    'click .close': 'closeView',
    'click .accept-friendship': 'acceptFriend',
    'click .reject-friendship': 'rejectFriend'
  },

  acceptFriend: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    var friendship = new Fridgeslam.Models.Friendship({
      id: this.model.get('friendship_id')
    });
    var that = this;
    friendship.set({pending: false});
    // that.model.fetch();
    friendship.save({}, {
      success: function () {
        that.model.collection.remove(that.model);
      }
    });
  },

  rejectFriend: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    var friendship = new Fridgeslam.Models.Friendship({
      id: this.model.get('friendship_id')
    });
    friendship.destroy();
  },

  render: function () {
    var that = this;
    var content = this.template({
      request: that.model
    });

    this.$el.html(content);
    return this;
  }
});
