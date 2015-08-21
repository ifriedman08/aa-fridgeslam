Fridgeslam.Views.GroupSlamsEdit = Backbone.View.extend({
  template: JST['slams/group-edit'],

  initialize: function () {
    // debugger;
    this.word_array = this.model.get('body');
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click li': 'addNewLine',
    'click button.submit-word': 'addWord',
    'click button.end-slam': 'postSlam'
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

  addNewLine: function (event) {
    event.preventDefault();
    $target = $(event.currentTarget);
    if ($target.attr('class') === "new-line") {
      var word = "<br>";
      this.word_array.push(word);
    }
  },

  addWord: function () {
    $input = $('.new-word');
    // debugger
    if ($input.val().split(' ').length > 1) {
      alert('One word at a time, please.');
    } else {
      this.word_array.push($input.val().split(' '));
      var attrs = {
        body: this.word_array.join(' ')
      };
      this.model.save(attrs, {
        patch: true,
        success: function () {
          alert('saved!');
          Backbone.history.navigate('#', {trigger: true});
        }
      });
    }
  },

  render: function () {
    var that = this;
    // this.model.fetch();
    var content = this.template({
      slam: that.model
    });

    this.$el.html(content);
    return this;
  }
});
