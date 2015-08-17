Fridgeslam.Views.SlamShow = Backbone.View.extend({
  template: JST['slams/show'],

  className: 'slam-show',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.$el.on('click', function () {
      event.stopPropagation();
    });
  },

  events: {
    'click .close': 'closeView',
    'click .like-button': 'addLike'
  },

  addLike: function (event) {
    event.preventDefault();
    // debugger;
    var l = new Fridgeslam.Models.Like({});
    l.set({
      'slam_id': Number(event.currentTarget.dataset.slamId),
      'user_id': Number(Fridgeslam.CURRENT_USER.id)});
    l.save();
    this.render();
  },

  render: function () {
    var that = this;
    var content = this.template({
      slam: that.model
    });

    this.$el.html(content);
    return this;
  }
});
