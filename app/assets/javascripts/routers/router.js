Fridgeslam.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#content');
    this.collection = new Fridgeslam.Collections.Slams();
  },

  routes: {
    '': 'dashboard',
    'index/:list': 'goToIndex',
    'slams/new-solo': 'startSoloSlam',
    'slams/new-group': 'startGroupSlam',
    'slams/:id': 'slamShow',
    'users/:id': 'userShow',
    'pendingfriendships': 'friendsShow'
  },

  friendsShow: function () {
    debugger;
  },

  userShow: function (id) {
    var that = this;
    var users = new Fridgeslam.Collections.Users();
    var user = users.getOrFetch(id);

    var userShow = new Fridgeslam.Views.UserShow({
      model: user,
    });
    this._swapView(userShow);
  },

  slamShow: function (id) {
    // debugger;
    var that = this;
    var slam = this.collection.getOrFetch(id);

    if (slam.escape('user_id') === Fridgeslam.CURRENT_USER.id && slam.get('pending')) {
      var slamEdit = new Fridgeslam.Views.SlamsEdit({
        model: slam,
      });
      this._swapView(slamEdit);
    } else {
      var slamShow = new Fridgeslam.Views.SlamShow({
        model: slam,
      });
      this._swapView(slamShow);
    }
  },

  startSoloSlam: function () {
    var that = this;
    var newSlam = new Fridgeslam.Models.Slam();
    var newSlamForm = new Fridgeslam.Views.SlamsNew({
      model: newSlam,
      collection: that.collection
    });
    this._swapView(newSlamForm);
  },

  dashboard: function () {
    this.collection.fetch();
    this.$rootEl.off('click');
    var dashView = new Fridgeslam.Views.DashView({
      collection: this.collection
    });
    this._swapView(dashView);

  },

  goToIndex: function (list) {
    var collection = new Fridgeslam.Collections.Slams();
    collection.fetch({
      data: {order: list}
    });

    var indexView = new Fridgeslam.Views.SlamsIndex({
      collection: collection
    });

    this._swapView(indexView);
  },


  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
