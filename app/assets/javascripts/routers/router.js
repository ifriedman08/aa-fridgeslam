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
    'pendingfriendships': 'pendingFriendsIndex'
  },

  pendingFriendsIndex: function () {
    var requestors = new Fridgeslam.Collections.Users();
    requestors.fetch({
      data: {pending_invites: true}
    });

    var friendsView = new Fridgeslam.Views.PendingFriendsIndex({
      collection: requestors
    });

    this._swapView(friendsView);
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
    var that = this;
    var slam = new Fridgeslam.Models.Slam({id: id});
    slam.fetch({
      success: function () {
        if (slam.get('user_id') === Fridgeslam.CURRENT_USER.id && slam.get('pending') && slam.escape('mode') === 'solo') {
          var slamEdit = new Fridgeslam.Views.SlamsEdit({
            model: slam,
          });
          that._swapView(slamEdit);
        } else if (slam.get('slammer_ids')[slam.get('ord')] === Fridgeslam.CURRENT_USER.id && slam.get('pending') && slam.escape('mode') === 'group') {
          var groupSlamEdit = new Fridgeslam.Views.GroupSlamsEdit({
            model: slam,
          });
          that._swapView(groupSlamEdit);
        } else {
          var slamShow = new Fridgeslam.Views.SlamShow({
            model: slam,
          });
          that._swapView(slamShow);
        }
      }
    });
  },

  startSoloSlam: function () {
    var that = this;
    var newSoloSlam = new Fridgeslam.Models.Slam();
    var newSoloSlamForm = new Fridgeslam.Views.SlamsNewSolo({
      model: newSoloSlam,
      collection: that.collection
    });
    this._swapView(newSoloSlamForm);
  },

  startGroupSlam: function () {
    var that = this;
    var newGroupSlam = new Fridgeslam.Models.Slam();
    var newGroupSlamForm = new Fridgeslam.Views.SlamsNewGroup({
      model: newGroupSlam,
      collection: that.collection
    });
    this._swapView(newGroupSlamForm);
  },

  dashboard: function () {
    this.collection.fetch({
      data: {order: 'pending'}
    });
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
