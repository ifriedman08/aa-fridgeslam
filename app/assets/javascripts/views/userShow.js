Fridgeslam.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  className: 'user-show',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.$el.on('click', function () {
      event.stopPropagation();
    });

  },

  render: function () {
    var that = this;
    var content = this.template({
      user: that.model
    });

    this.$el.html(content);

    var slams = this.model.attributes.slams;
    if (slams) {
      slams.forEach(function (slam) {
      this.addSlamSubview(slam);
    }.bind(this));
    }
    return this;
  },

  addSlamSubview: function (slam) {
    var slamModel = new Fridgeslam.Models.Slam();
    slamModel.set(slam);
    slamModel._user = this.model;
    var slamSubView = new Fridgeslam.Views.SlamIndexItem({
      model: slamModel
    });

    this.addSubview('.user-slams-list', slamSubView);
  }
});
