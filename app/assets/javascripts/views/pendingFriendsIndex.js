Fridgeslam.Views.PendingFriendsIndex = Backbone.CompositeView.extend({
  template: JST['friendships/pending_requests_index'],

  className: 'requests-list-container',

  initialize: function () {
    // debugger
    this.collection.fetch();
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addRequestSubview);
    this.listenTo(this.collection, 'remove', this.removeRequestSubview);
    this.collection.each(function (request) {
      this.addRequestSubview(request);
    }.bind(this));
  },

  // events: {
  //   'click .accept-friendship': 'acceptFriend',
  //   'click .reject-friendship': 'rejectFriend'
  // },

  // acceptFriend: function (event) {
  //   event.preventDefault();
  //   var $target = $(event.currentTarget);
  //   var friendship = new Fridgeslam.Models.Friendship({
  //     id: $target.data('friendship-id')
  //   });
  //   var that = this;
  //   friendship.set({pending: false});
  //
  //   friendship.save({}, {
  //     success: function () {
  //       that.collection.remove(friendship);
  //     }
  //   });
  // },
  //
  // rejectFriend: function (event) {
  //   event.preventDefault();
  //   var $target = $(event.currentTarget);
  //   var friendship = new Fridgeslam.Models.Friendship({
  //     id: $target.data('friendship-id')
  //   });
  //   friendship.destroy();
  //   this.render();
  // },

  render: function () {
    var that = this;
    var content = this.template({
      requestors: that.collection
    });

    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addRequestSubview: function (request) {
    var that = this;
    var reqSubView = new Fridgeslam.Views.PendingFriendsIndexItem({
      model: request,
      collection: that.collection
    });

    this.addSubview('.requestor-list', reqSubView);
  },

  removeRequestSubview: function (request) {
    var reqSubView = new Fridgeslam.Views.PendingFriendsIndexItem({
      model: request
    });

    this.removeSubview('.requestor-list', reqSubView);
  }
});
