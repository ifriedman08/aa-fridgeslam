Fridgeslam.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    // var dropDownView = new TrelloClone.Views.DropDownView({
    //   collection: TrelloClone.Collections.boards
    // });
    // $('#add-dropdown').append(dropDownView.render().$el);
    this.$rootEl = $('#content');
  },

  routes: {
    '': 'slamsIndex'
    // 'solo_slams/:id': 'boardShow'
  },

  slamsIndex: function () {
    alert('slams index');
  },

  // boardShow: function (id) {
  //   var board = TrelloClone.Collections.boards.getOrFetch(id);
  //
  //   var view = new TrelloClone.Views.BoardShow({
  //     model: board
  //   });
  //
  //   this._swapView(view);
  // },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
