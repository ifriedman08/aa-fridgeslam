Fridgeslam.Views.SlamsNewSolo = Backbone.View.extend({
  template: JST['slams/new-solo'],

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
      user: Fridgeslam.CURRENT_USER.id,
      current_slammer_id: Fridgeslam.CURRENT_USER.id,
      slammer_ids: [Fridgeslam.CURRENT_USER.id]
    };
    var that = this;
    this.model.save(attrs, {
      success: function () {
        Backbone.history.navigate('#', {trigger: true});
        $('.nav-bar').notify( 'Saved your Solo Slam! Find it in your Finished Slams.', {
          arrowShow: false,
          position: 'bottom center',
          className: 'success'
        });
      },
      error: function () {
        $('.nav-bar').notify( "Body and/or title can't be blank.", {
          arrowShow: false,
          position: 'bottom center',
          className: 'error'
        });
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
      user: Fridgeslam.CURRENT_USER.id,
      current_slammer_id: Fridgeslam.CURRENT_USER.id,
      slammer_ids: [Fridgeslam.CURRENT_USER.id]
    };
    var that = this;
    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        $('.nav-bar').notify( 'Saved your Solo Slam! Find it in your Pending Slams.', {
          arrowShow: false,
          position: 'bottom center',
          className: 'success'
        });
        Backbone.history.navigate('#', {trigger: true});
      },
      error: function () {
        $('.nav-bar').notify( "Body and/or title can't be blank.", {
          arrowShow: false,
          position: 'bottom center',
          className: 'error'
        });
      }
    });
  },

  addWord: function (event) {
    event.preventDefault();
    var that = this;
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
    this.body_string = '';
    this.word_array.forEach(function (word, index) {
      if (index === 0 ||
          word === '.'||
          word === ','||
          word === ':'||
          word === ';'||
          word === '!'||
          word === '?' ) {
        that.body_string += word;
      } else {
        that.body_string += ' ' + word;
      }
    });
    $('div.slam-preview').empty();
    $('div.slam-preview').html(this.body_string);
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
