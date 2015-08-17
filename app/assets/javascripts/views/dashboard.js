Fridgeslam.Views.DashView = Backbone.View.extend({
  template: JST['dash'],

  className: 'dashboard',


  initialize: function () {
    this.listenTo(this.collection, 'sync add', this.render);
  },

  render: function () {
    var that = this;
    // this.collection.fetch();
    var content = this.template({
      slams: that.collection
    });

    this.$el.html(content);
    return this;
  }
});
