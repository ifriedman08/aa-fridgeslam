window.Fridgeslam = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    new Fridgeslam.Routers.Router();
    Backbone.history.start();
  }
};
