Fridgeslam.Views.wordGen = Backbone.View.extend({
  template: JST['wordGen'],

  render: function () {
    var that = this;
    var content = this.template({ });
    this.$el.html(content);
    return this;
  }
});
