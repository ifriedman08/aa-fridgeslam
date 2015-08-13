Fridgeslam.Collections.Slams = Backbone.Collection.extend({
  url: '/api/slams',
  model: Fridgeslam.Models.Slam,

  getOrFetch: function (id) {
    var slam = this.get(id);

    if (!board) {
      slam = new TrelloClone.Models.Slam({ id: id });
      slam.fetch({
        success: function () {
          this.add(slam);
        }.bind(this)
      });
    } else {
      slam.fetch();
    }

    return slam;
  }
});
