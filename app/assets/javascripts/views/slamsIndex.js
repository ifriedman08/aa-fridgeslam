Fridgeslam.Views.SlamsIndex = Backbone.CompositeView.extend({
  template: JST['slams/index'],

  className: 'slams-index',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addSlamSubview);
    this.$el.on('click', function () {
      event.stopPropagation();
    });
    this.collection.each(function (slam) {
      this.addSlamSubview(slam);
    }.bind(this));
  },

  events: {
    'click .close': 'closeView',
    'click p.slam-title': 'goToShow'
  },

  goToShow: function (event) {
    event.preventDefault();

    // $target = $(event.currentTarget());
    // debugger;
    Backbone.history.navigate("/slams/" + event.currentTarget.dataset.id, { trigger: true });

  },

  closeView: function () {
    Backbone.history.navigate("", { trigger: true });
  },

  render: function () {
    var that = this;
    var content = this.template({
      slams: that.collection
    });

    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addSlamSubview: function (slam) {
    var slamSubView = new Fridgeslam.Views.SlamIndexItem({
      model: slam
    });

    this.addSubview('.slam-list', slamSubView);
  }
});
