Fridgeslam.Collections.Slams = Backbone.Collection.extend({
  url: '/api/slams',
  model: Fridgeslam.Models.Slam,

  pendingSlams: function () {
    // debugger;
    return this.filter(function(slam){
      return (
        slam.get('current_slammer_id') === Number(Fridgeslam.CURRENT_USER.id)
      );}).length;
      // slam.get('user_id') === Number(Fridgeslam.CURRENT_USER.id) &&
      // slam.get('pending')) ||
  },

  getOrFetch: function (id) {
    var slam = this.get(id);

    if (!slam) {
      slam = new Fridgeslam.Models.Slam({ id: id });
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
