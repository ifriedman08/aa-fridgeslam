Fridgeslam.Models.Slam = Backbone.Model.extend({
  urlRoot: '/api/slams',

  user: function () {
    if (this._user) {
      return this._user;
    } else {
      this._user = new Fridgeslam.Models.User();
      return this._user;
    }
  },

  members: function () {
    if (this._members) {
      return this._members;
    } else {
      this._members = new Fridgeslam.Collections.Users();
      return this._members;
    }
  },

  likes: function () {
    if (this._likes) {
      return this._likes;
    } else {
      this._likes = new Fridgeslam.Collections.Likes();
      return this._likes;
    }
  },

  parse: function (response) {
    if (response.user) {
      this.user().set(response.user, { parse: true });
      delete response.user;
    }
    if (response.likes) {
      this.likes().set(response.likes);
      delete response.likes;
    }
    if (response.members) {
      this.members().set(response.members);
      delete response.members;
    }
    return response;
  }
});
