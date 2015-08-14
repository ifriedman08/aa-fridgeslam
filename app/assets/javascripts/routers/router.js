Fridgeslam.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#content');
    this.collection = new Fridgeslam.Collections.Slams();
  },

  routes: {
    '': 'dashboard',
    'top': 'topIndex',
    'new': 'newIndex',
    'pending': 'pendingIndex',
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
    var dashView = new Fridgeslam.Views.DashView();
    this._swapView(dashView);

  },

  pendingIndex: function () {
    this.collection.fetch({
      data: {order: 'pending'}
    });

    var indexView = new Fridgeslam.Views.SlamsIndex({
      collection: this.collection
    });

    this._swapView(indexView);
  },

  newIndex: function () {
    this.collection.fetch({
      data: {order: 'new'}
    });

    var indexView = new Fridgeslam.Views.SlamsIndex({
      collection: this.collection
    });

    this._swapView(indexView);
  },

  topIndex: function () {
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
