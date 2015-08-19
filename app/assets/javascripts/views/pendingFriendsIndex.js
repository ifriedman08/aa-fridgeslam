Fridgeslam.Views.PendingFriendsIndex = Backbone.View.extend({
  template: JST['friendships/index'],

  className: 'friends-list',


  initialize: function () {
    this.listenTo(this.collection, 'sync add', this.render);
  },

  render: function () {
    var that = this;
    this.collection.fetch();
    debugger;
    var content = this.template({
      friendships: that.collection
    });

    this.$el.html(content);
    return this;
  }
});
