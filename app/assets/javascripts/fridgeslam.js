window.Fridgeslam = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {

    var router = new Fridgeslam.Routers.Router();
    Backbone.history.start();

    //  Fridgeslam.CURRENT_USER = ({id: Fridgeslam.CURRENT_USER.id});
    //  Fridgeslam.CURRENT_USER.getOrFetch();
    //  this.CURRENT_USER = this.Collections.fetch({id: Fridgeslam.CURRENT_USER.id});
    //   username: "<%= current_user.username %>",
    //   id: "<%= current_user.id %>",
    //   pendingSlams: "<%= current_user.pending_slams.length %>"
    // };
  }
};
