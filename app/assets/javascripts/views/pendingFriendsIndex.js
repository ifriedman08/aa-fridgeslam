Fridgeslam.Views.PendingFriendsIndex = Backbone.CompositeView.extend({
  template: JST['friendships/pending_requests_index'],

  className: 'requests-list-container',

  initialize: function () {
    secondrender = false;
    this.listenTo(this.collection, 'sync', this.rerender);
    this.listenTo(this.collection, 'add', this.addRequestSubview);
    this.listenTo(this.collection, 'remove', this.removeRequestSubview);
    this.collection.each(function (request) {
      this.addRequestSubview(request);
    }.bind(this));
  },

  rerender: function () {
    secondrender = true;
    this.render();
  },

  render: function () {
    var that = this;
    var content = this.template({
      requestors: that.collection
    });

    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addRequestSubview: function (request) {
    var that = this;
    var reqSubView = new Fridgeslam.Views.PendingFriendsIndexItem({
      model: request,
      collection: that.collection
    });

    this.addSubview('.requestor-list', reqSubView);
  },

  removeRequestSubview: function (user) {
    this.removeModelSubview('.requestor-list', user);
  }
});
