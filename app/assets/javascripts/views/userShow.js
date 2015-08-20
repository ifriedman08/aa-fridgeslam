Fridgeslam.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  className: 'user-show',

  initialize: function () {
    this.friendship = this.model.friendship();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.collection, 'remove', this.render);
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
    friendship.save({}, {
      success: function () {
        that.model.get("pending_inviters").push({ id: Fridgeslam.CURRENT_USER.id });
        that.render();
      }
    });
  },

  acceptFriendship: function (event) {
    event.preventDefault();
    var that = this;
    this.friendship.save({ pending: false }, {
      success: function () {
        that.model.friends().add(new Fridgeslam.Models.User({ id: Fridgeslam.CURRENT_USER.id }));
        that.model.collection.remove(that.model);
        that.render();
        $('div.friends-num').text(Number($('div.friends-num').text()) - 1);
      }
    });
  },

  rejectFriendship: function (event) {
    event.preventDefault();
    var that = this;
    var friendee = this.model.friendees().find(function (obj) { return obj.get("friend_id") == Fridgeslam.CURRENT_USER.id; });
    friendee.destroy({
      success: function () {
        that.model.friendship().clear();
        that.model.collection.remove(that.model);
        that.render();
        $('div.friends-num').text(Number($('div.friends-num').text()) - 1);
      },
    });
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
