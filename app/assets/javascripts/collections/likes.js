Fridgeslam.Collections.Likes = Backbone.Collection.extend({
  url: '/api/likes',
  model: Fridgeslam.Models.Like,

  getOrFetch: function (id) {
    var like = this.get(id);

    if (!like) {
      like = new Fridgeslam.Models.Like({ id: id });
      like.fetch({
        success: function () {
          this.add(like);
        }.bind(this)
      });
    } else {
      like.fetch();
    }

    return like;
  }
});
