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

  parse: function (response) {
    if (response.user) {
      this.user().set(response.user, { parse: true });
      delete response.user;
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
