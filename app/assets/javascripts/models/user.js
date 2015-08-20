Fridgeslam.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  isFriend: function () {
    // this.fetch();
    var result = false;
    this.friends().forEach( function(friend) {
      if (friend.id == Fridgeslam.CURRENT_USER.id) {
        result = true;
      }
    });
    return result;
  },

  friendshipSent: function () {
    var result = false;
    this.get('pending_inviters').forEach( function(friend) {
      if (friend.id == Fridgeslam.CURRENT_USER.id) {
        result = true;
      }
    });
    return result;
  },

  isWaiting: function () {
    var result = false;
    this.friendees().each(function(friend) {
      if (friend.get('friend_id') == Fridgeslam.CURRENT_USER.id) {
        result = true;
      }
    });
    return result;
  },

  friends: function () {
    if (this._friends) {
      return this._friends;
    } else {
      this._friends = new Fridgeslam.Collections.Users();
      return this._friends;
    }
  },

  friendees: function () {
    if (this._friendees) {
      return this._friendees;
    } else {
      this._friendees = new Fridgeslam.Collections.Users();
      return this._friendees;
    }
  },

  pendingFriendships: function () {
    if (this._pendingFriendships) {
      return this._pendingFriendships;
    } else {
      this._pendingFriendships = new Fridgeslam.Collections.Friendships();
      return this._pendingFriendships;
    }
  },

  friendship: function () {
    if (!this._friendship) {
      this._friendship = new Fridgeslam.Models.Friendship();
    }

    return this._friendship;
  },

  parse: function (response) {
    if (response.pending_friendships) {
      this.pending_friendships().set(response.pending_friendships, { parse: true });
      delete response.pending_friendships;
    }

    if (response.friends) {
      this.friends().set(response.friends, { parse: true });
      delete response.friends;
    }

    if (response.friendees) {
      this.friendees().set(response.friendees, { parse: true });
      delete response.friendees;
    }

    if (response.friendship_id) {
      this.friendship().set({id: response.friendship_id});
      delete response.friendship_id;
    }
    return response;
  }
});
