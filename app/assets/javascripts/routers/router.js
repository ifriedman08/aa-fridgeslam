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
    'slams/:id': 'boardShow'
  },

  startSoloSlam: function () {
    var newSlam = new Fridgeslam.Models.Slam();
    var newSlamForm = new Fridgeslam.Views.SlamsNew({
      model: newSlam
    });
    this._swapView(newSlamForm);
  },

  dashboard: function () {
    this.$rootEl.off('click');
    var dashView = new Fridgeslam.Views.DashView();
    this._swapView(dashView);

  },

  goToIndex: function (list) {
    this.collection.fetch({
      data: {order: list}
    });

    var indexView = new Fridgeslam.Views.SlamsIndex({
      collection: this.collection
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
