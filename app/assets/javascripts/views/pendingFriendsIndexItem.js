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
          $('.requestor-list').append("<img class='alone' src='http://pre04.deviantart.net/3981/th/pre/f/2012/145/5/3/forever_alone_png_by_nfc_by_ninetailsfoxchan-d510mu7.png'>");
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
          $('.requestor-list').append("<img class='alone' src='http://pre04.deviantart.net/3981/th/pre/f/2012/145/5/3/forever_alone_png_by_nfc_by_ninetailsfoxchan-d510mu7.png'>");
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
