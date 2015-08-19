Fridgeslam.Models.Friendship = Backbone.Model.extend({
  urlRoot: '/api/friendships',

  // friend_id: function () {
  //   if (this._friend_id) {
  //     return this._friend_id;
  //   } else {
  //     this._friend_id = undefined;
  //     return this._friend_id;
  //   }
  // },
  //
  // parse: function (response) {
  //   debugger
  //   if (response.pending_friendships) {
  //     this.pending_friendships().set(response.pending_friendships, { parse: true });
  //     delete response.pending_friendships;
  //   }
  // }
});
