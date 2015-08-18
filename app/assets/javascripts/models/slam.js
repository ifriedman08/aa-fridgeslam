Fridgeslam.Models.Slam = Backbone.Model.extend({
  urlRoot: '/api/slams',

  user: function () {
    if (this._user) {
      return this._user;
    } else {
      this._user = new Fridgeslam.Models.User();
      return this._user;
    }
    // return this._user;
  },

  likes: function () {
    if (this._likes) {
      return this._likes.length;
    } else {
      this._likes = new Fridgeslam.Collections.Likes();
      return this._likes.length;
    }
    // return this._user;
  },

  parse: function (response) {
    if (response.user) {
      this.user().set(response.user, { parse: true });
      delete response.user;
    }
    if (response.likes) {
      this.user().set(response.likes);
      delete response.likes;
    }
    return response;
  }

  // validate: function (attrs) {
  //   if (attrs.title === '') {
  //     return "Title can't be blank.";
  //   }
  //
  //   if (attrs.body === []) {
  //     return "Body can't be empty.";
  //   }
  // }
});
