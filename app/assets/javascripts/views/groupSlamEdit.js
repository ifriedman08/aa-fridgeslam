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
    $input = $('.new-word');
    if ($input.val().split(' ').length > 1) {
      alert('One word at a time, please.');
    } else {
      this.word_array = this.word_array.concat($input.val().split(' '));
      this.model.save({body: this.word_array, pending: false}, {
        success: function () {
          Backbone.history.navigate('#', {trigger: true});
        }
      });
    }
  },

  addNewLine: function (event) {
    event.preventDefault();
    $target = $(event.currentTarget);
    if ($target.attr('class') === "new-line") {
      var word = "<br>";
      this.word_array.push(word);
    }
  },

  addWord: function (event) {
    event.preventDefault();
    $input = $('.new-word');
    // debugger
    if ($input.val().split(' ').length > 1) {
      alert('One word at a time, please.');
    } else {
      this.word_array = this.word_array.concat($input.val().split(' '));
      this.model.save({body: this.word_array}, {
        success: function () {
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
