Fridgeslam.Views.DashView = Backbone.View.extend({
  template: JST['dash'],

  className: 'dashboard',


  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var that = this;
    var content = this.template({
      slams: that.collection
    });

    this.$el.html(content);
    return this;
  }
});
