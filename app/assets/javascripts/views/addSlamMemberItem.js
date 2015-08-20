Fridgeslam.Views.FriendIndexItem = Backbone.CompositeView.extend({
  template: JST['friendships/friend_index_item'],

  className: 'friend-index-item inactive',

  events:{
    'click': 'toggleMembership'
  },

  initialize: function () {
    Fridgeslam.addedMemberIds = [];
    Fridgeslam.addedMemberIds.push(Number(Fridgeslam.current_user.get('id')));
  },

  toggleMembership: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    if ($target.hasClass('inactive')) {
      Fridgeslam.addedMemberIds.push(this.model.get('id'));
      $target.removeClass('inactive').addClass('active').css({backgroundColor: "rgb(15, 10, 110)", color: "white" });
    } else {
      var i = Fridgeslam.addedMemberIds.indexOf(this.model.get('id'));
      Fridgeslam.addedMemberIds.splice(i, 1);
      $target.addClass('inactive').removeClass('active').css({backgroundColor: '', color: "black" });
    }
  },

  render: function () {
    var that = this;
    var content = this.template({
      friend: that.model
    });

    this.$el.html(content);
    return this;
  }
});
