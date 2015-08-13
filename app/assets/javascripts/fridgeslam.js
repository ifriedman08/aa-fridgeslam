window.Fridgeslam = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var router = new Fridgeslam.Routers.Router();
    Backbone.history.start();

    var pending = Fridgeslam.CURRENT_USER.pendingSlams;

    var nav = new Fridgeslam.Views.NavShow({
      router: router,
      collection: pending
    });

    $("#navbar").html(nav.render().$el);
  }
};
