Fridgeslam.Views.SlamShow = Backbone.View.extend({
  template: JST['slams/show'],

  className: 'slam-show',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.likes(), 'add', this.render);
  },

  events: {
    'click .close': 'closeView',
    'click .like-button': 'addLike'
  },

  addLike: function (event) {
    event.preventDefault();
    var l = new Fridgeslam.Models.Like({});
    l.set({
      'slam_id': Number(event.currentTarget.dataset.slamId),
      'user_id': Number(Fridgeslam.CURRENT_USER.id)});
    l.save({}, {
      success: function () {
        if ((this.model.likes().length === 0 || this.model.likes().last().get('user_id') != l.get('user_id')) && this.model.get('user_id') != Number(Fridgeslam.CURRENT_USER.id)) {
          this.model.likes().add(l);
        }
    }.bind(this)
  });
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
