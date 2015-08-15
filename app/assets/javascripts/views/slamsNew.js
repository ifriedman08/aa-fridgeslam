Fridgeslam.Views.SlamsNew = Backbone.View.extend({
  template: JST['slams/new'],

  initialize: function () {
    this.word_array = [];
    this.listenTo(this.model, 'sync', this.render);
    this.refreshWordList();
  },

  events: {
    'click li': 'addWord',
    'click input.post-slam': 'postSlam',
    'click input.save-slam': 'saveSlam'
  },

  saveSlam: function (event) {
    event.preventDefault();
    var attrs = {
      title: $('input.slam-title').val(),
      body: $('div.slam-preview').html().split(' '),
    };
    this.model.save(attrs, {
      success: function () {
        alert('saved!');
      },
      error: function () {
        alert('errors');
      }
    });
    // debugger;
  },

  addWord: function (event) {
    event.preventDefault();
    $target = $(event.currentTarget);
    // debugger;
    if ($target.attr('class') === "new-line") {
      var word = "<br>";
    } else {
      var word = $target.html();
    }
    this.word_array.push(word);
    $('div.slam-preview').html(this.word_array.join(' '));
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
      slam: that.model
    });

    this.$el.html(content);
    this.refreshWordList();
    return this;
  }
});
