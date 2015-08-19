Fridgeslam.Models.Friendship = Backbone.Model.extend({
  urlRoot: '/api/friendships',

  // parse: function (response) {
  //   if (response.friend_id) {
  //     this.friend_id().set(response.friend_id);
  //     delete response.friend_id;
  //   }
  //   if (response.friendable_id) {
  //     // debugger;
  //     this.friendable_id().set(response.friendable_id);
  //     delete response.friendable_id;
  //   }
  //   return response;
  // }
});
