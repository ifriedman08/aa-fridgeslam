Fridgeslam.Views.SlamsIndex = Backbone.View.extend({
  template: JST['slams/index'],

  className: 'slams-index',

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
