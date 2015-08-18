window.Fridgeslam = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {

    var router = new Fridgeslam.Routers.Router();
    Backbone.history.start();

    //   this.CURRENT_USER = {
    //   username: "<%= current_user.username %>",
    //   id: "<%= current_user.id %>",
    //   pendingSlams: "<%= current_user.pending_slams.length %>"
    // };
  }
};
