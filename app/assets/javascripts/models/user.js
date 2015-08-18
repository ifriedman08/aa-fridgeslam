Fridgeslam.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  isFriend: function () {
    // debugger;
    this.attributes.friends.forEach( function(friend) {
      if (friend.id == Fridgeslam.CURRENT_USER.id) {
        return true;
      }
    });
    return false;
  },

  friends: function () {
    if (this._friends) {
      return this._friends;
    } else {
      this._friends = [];
      return this._friends;
    }
  }
});
