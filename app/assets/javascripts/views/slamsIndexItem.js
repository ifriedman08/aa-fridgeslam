Fridgeslam.Views.SlamIndexItem = Backbone.CompositeView.extend({
  template: JST['slams/indexItem'],

  className: 'slams-index-item',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.$el.on('click', function () {
      event.stopPropagation();
    });
  },

  events: {
    'click .close': 'closeView'
  },

  render: function () {
    var that = this;
    // debugger;
    var content = this.template({
      slam: that.model
    });

    this.$el.html(content);
    return this;
  }
});
