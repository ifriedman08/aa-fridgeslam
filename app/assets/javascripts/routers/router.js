Fridgeslam.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#content');
    this.collection = new Fridgeslam.Collections.Slams();
  },

  routes: {
    '': 'slamsIndex',
    'solo_slams/:id': 'boardShow'
  },

  slamsIndex: function () {
    this.collection.fetch();
    var indexView = new Fridgeslam.Views.SlamsIndex({
      collection: this.collection
    });

    this._swapView(indexView);
  },

  boardShow: function (id) {
    var board = Fridgeslam.Collections.boards.getOrFetch(id);

    var view = new Fridgeslam.Views.BoardShow({
      model: board
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
