Fridgeslam.Views.SlamsEdit = Backbone.View.extend({
  template: JST['slams/edit'],

  initialize: function () {
    // debugger;
    this.word_array = this.model.get('body');
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
      pending: false
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
      pending: true
    };
    var that = this;
    // this.model.set(attrs);
    // this.model.set('body', attrs.body);
    debugger;
    this.model.save(attrs, {
      patch: true,
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
    if ($target.attr('class') === "new-line") {
      var word = "<br>";
    } else if ($target.attr('class') === "punctuation" || $target.attr('class') === "common-word") {
      var word = $target.html();
    } else {
      var word = $target.html();
      this.refreshWordList();
    }
    this.word_array.push(word);
    $('div.slam-preview').html(this.word_array.join(' '));
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
    // this.model.fetch();
    var content = this.template({
      slam: that.model
    });

    this.$el.html(content);
    this.refreshWordList();
    return this;
  }
});
