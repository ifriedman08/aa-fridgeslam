Fridgeslam.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  className: 'user-show',

  initialize: function () {
    this.listenTo(this.model, 'sync update', this.render);
    this.$el.on('click', function () {
      event.stopPropagation();
    });

  },

  events: {
    'click .accept-friendship': 'acceptFriendship',
    'click .reject-friendship': 'rejectFriendship',
    'click .send-friendship': 'sendFriendship'
  },

  sendFriendship: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    var that = this;
    var friendship = new Fridgeslam.Models.Friendship({
      friendable_id: Fridgeslam.CURRENT_USER.id,
      friend_id: that.model.get('id')
    });

    friendship.save();
    // this.collection.fetch()
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
      user: that.model
    });

    this.$el.html(content);

    var slams = this.model.attributes.slams;
    if (slams) {
      slams.forEach(function (slam) {
      this.addSlamSubview(slam);
    }.bind(this));
    }
    return this;
  },

  addSlamSubview: function (slam) {
    var slamModel = new Fridgeslam.Models.Slam();
    slamModel.set(slam);
    slamModel._user = this.model;
    var slamSubView = new Fridgeslam.Views.SlamIndexItem({
      model: slamModel
    });

    this.addSubview('.user-slams-list', slamSubView);
  }
});
