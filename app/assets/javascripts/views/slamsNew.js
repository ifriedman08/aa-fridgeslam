Fridgeslam.Views.SlamsNew = Backbone.View.extend({
  template: JST['slams/new'],

  initialize: function () {
    this.word_array = [];
    this.listenTo(this.model, 'sync', this.render);
    this.refreshWordList();
  },

  events: {
    'click li': 'addWord',
    'click button.post-slam': 'postSlam',
    'click button.save-slam': 'saveSlam'
  },

  postSlam: function (event) {
    event.preventDefault();
    var attrs = {
      title: $('input.slam-title').val(),
      body: $('div.slam-preview').html().split(' '),
      mode: 'solo',
      pending: false,
      user: Fridgeslam.CURRENT_USER.id
    };
    var that = this;
    this.model.save(attrs, {
      success: function () {
        alert('posted!');
        Backbone.history.navigate('#', {trigger: true});
      },
      error: function () {
        alert("Body and title can't be blank.");
      }
    });
  },

  saveSlam: function (event) {
    event.preventDefault();
    var attrs = {
      title: $('input.slam-title').val(),
      body: $('div.slam-preview').html().split(' '),
      mode: 'solo',
      pending: true,
      user: Fridgeslam.CURRENT_USER.id
    };
    var that = this;
    this.model.save(attrs, {
      success: function () {
        alert('saved!');
        Backbone.history.navigate('#', {trigger: true});
      },
      error: function () {
        alert("Body and title can't be blank.");
      }
    });
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
