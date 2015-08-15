Fridgeslam.Views.SlamsNew = Backbone.View.extend({
  template: JST['slams/new'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.refreshWordList();
  },

  events: {
    'click li': 'addWord',
    'click .post-slam': 'saveSlam',
    'click .save-slam': 'postSlam'
  },

  addWord: function (event) {
    event.preventDefault();
    $target = $(event.currentTarget);
    $('div.slam-preview').append($target.html());
    this.refreshWordList();
  },

  refreshWordList: function () {
    $('ul.generated-word-list').empty();
    for (var i = 0; i < 13; i++) {
      var li = $('<li class="generated-word">');
      li.text(dictionary[Math.floor(Math.random() * dictionary.length)]);
      $('ul.generated-word-list').append(li);
    }
  },

  render: function () {
    var that = this;
    var content = this.template({
      slams: that.model
    });

    this.$el.html(content);
    this.refreshWordList();
    return this;
  }
});
