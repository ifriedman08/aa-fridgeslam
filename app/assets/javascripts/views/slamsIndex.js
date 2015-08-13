Fridgeslam.Views.SlamsIndex = Backbone.View.extend({
  template: JST['slams/index'],

  className: 'boards-index',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    debugger
    var that = this;
    var content = this.template({
      slams: that.collection
    });

    this.$el.html(content);
    return this;
  }
});
