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

  // authors: function () {
  //   if (this._authors) {
  //     return this._authors;
  //   } else {
  //     this._authors = {};
  //     return this._authors;
  //   }
  // },

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
    // if (response.authors) {
    //   this._authors.set(response.authors);
    //   delete response.authors;
    // }
    return response;
  }
});
