window.Fridgeslam = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var router = new Fridgeslam.Routers.Router();
    Backbone.history.start();

    var pending = Fridgeslam.CURRENT_USER.pendingSlams;
  }
};
