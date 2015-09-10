Fridgeslam.Views.PendingFriendsIndexItem = Backbone.CompositeView.extend({
  template: JST['friendships/pending_requests_index_item'],

  className: 'requests-index-item',

  initialize: function () {
    this.friendship = this.model.friendship();
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

    var that = this;
    this.friendship.save({ pending: false }, {
      success: function () {
        that.collection.remove(that.model);
        $('div.friends-num').text(Number($('div.friends-num').text()) - 1);
        if ($('div.friends-num').text() == 0) {
          $('.requestor-list').append("<h2 class='no-reqs'>No requests here.</h2>");
        }
      }
    });
  },

  rejectFriend: function (event) {
    event.preventDefault();

    var that = this;
    this.friendship.destroy({
      success: function () {
        that.collection.remove(that.model);
        $('div.friends-num').text(Number($('div.friends-num').text()) - 1);
        if ($('div.friends-num').text() == 0) {
          $('.requestor-list').append("<h2 class='no-reqs'>No requests here.</h2>");
        }
      },
    });
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
