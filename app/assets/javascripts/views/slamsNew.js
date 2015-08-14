Fridgeslam.Views.SlamsNew = Backbone.View.extend({
  template: JST['slams/new'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    var wordOptions = new Fridgeslam.Views.wordGen();
    $('word-options-container').append(wordOptions);
    debugger;
  },

  events: {
    'click li': 'addWord'
  },

  addWord: function (event) {
    event.preventDefault();
    $target = $(event.currentTarget);
    $('div.slam-preview').append($target.html());
    var wordOptions = new Fridgeslam.Views.wordGen();
    $('word-options-container').append(wordOptions);
    // debugger;
  },

  render: function () {
    var that = this;
    var content = this.template({
      slams: that.model
    });

    this.$el.html(content);
    // $('word-options-container').empty();
    // var wordOptions = new Fridgeslam.Views.wordGen();
    // $('word-options-container').append(wordOptions);
    return this;
  }
});
