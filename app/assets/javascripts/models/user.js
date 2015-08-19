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
  },

  pendingFriendships: function () {
    if (this._pendingFriendships) {
      return this._pendingFriendships;
    } else {
      this._pendingFriendships = [];
      return this._pendingFriendships;
    }
  },

  parse: function (response) {
    if (response.pending_friendships) {
      this.pending_friendships().set(response.pending_friendships, { parse: true });
      delete response.pending_friendships;
    }
    return response;
  }
});
