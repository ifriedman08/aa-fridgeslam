Fridgeslam.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  // slams: function () {
  //   if (this._slams) {
  //     return this._slams;
  //   } else {
  //     this._user = new Fridgeslam.Collections.Slams();
  //   }
  // },
  //
  // parse: function (response) {
  //   if (response.slams) {
  //     this.slams().set(response.slams, { parse: true });
  //     delete response.slams;
  //   }
  //   return response;
  // }

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
