Fridgeslam.Views.PendingFriendsIndex = Backbone.CompositeView.extend({
  template: JST['friendships/pending_requests_index'],

  className: 'requests-list-container',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addRequestSubview);
    this.listenTo(this.collection, 'remove', this.removeRequestSubview);
    this.collection.each(function (request) {
      this.addRequestSubview(request);
    }.bind(this));
  },

  render: function () {
    var that = this;
    var content = this.template({
      requestors: that.collection
    });

    this.$el.html(content);
    this.attachSubviews();
    if (this.collection.length === 0) {
      $('.requestor-list').append("<img class='alone' src='http://pre04.deviantart.net/3981/th/pre/f/2012/145/5/3/forever_alone_png_by_nfc_by_ninetailsfoxchan-d510mu7.png'>");
    }
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
