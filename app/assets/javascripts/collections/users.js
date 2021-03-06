Fridgeslam.Collections.Users = Backbone.Collection.extend({
  url: '/api/users',
  model: Fridgeslam.Models.User,

  getOrFetch: function (id) {
    var user = this.get(id);

    if (!user) {
      user = new Fridgeslam.Models.User({ id: id });
      user.fetch({
        success: function () {
          this.add(user);
        }.bind(this)
      });
    } else {
      user.fetch();
    }

    return user;
  }
});
