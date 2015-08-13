Fridgeslam.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#content');
    this.collection = new Fridgeslam.Collections.Slams();
  },

  routes: {
    '': 'dashboard',
    'slams/:id': 'boardShow'
  },

  dashboard: function () {
    this.collection.fetch({
      data: {order: 'pending'}
    });

    var dashboardView = new Fridgeslam.Views.dashboardView({
      collection: this.collection
    });

  },

  slamsIndex: function () {
    // debugger;
    this.collection.fetch({
      data: {order: 'top'}
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
