window.Fridgeslam = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {

    var router = new Fridgeslam.Routers.Router();
    Backbone.history.start();

     Fridgeslam.current_user = new Fridgeslam.Models.User({id: Fridgeslam.CURRENT_USER.id});
     Fridgeslam.current_user.fetch();
  }
};
