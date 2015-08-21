Fridgeslam.Views.SlamsNewGroup = Backbone.CompositeView.extend({
  template: JST['slams/new-group'],

  initialize: function () {
    this.attachFriendsList();
  },

  events: {
    // 'click li': 'toggleMembership',
    'click button.submit-group-word': 'startGroupSlam',
    'click button.save-slam': 'saveSlam'
  },

  attachFriendsList: function () {
    var that = this;
    var current_user = new Fridgeslam.Models.User({id: Fridgeslam.CURRENT_USER.id});
    current_user.fetch({
      success: function () {
        current_user.friends().forEach(function (friend) {
          that.addFriendSubview(friend);
        });
      }
    });
  },

  startGroupSlam: function (event) {
    event.preventDefault();
    if ($('input.slam-title').val() === '') {
      alert("Don't forget a title!");
    }
    if ($('input.word-input').val() === '') {
      alert("Don't forget to pick the first word!");
    }
    if (Fridgeslam.addedMemberIds.length === 1 ) {
      alert("Don't forget to add at least one other member!");
    }
    if ($('input.word-input').val().split(' ').length > 1) {
      alert('One word at a time, please.');
    }

    this.model.set({
      title: $('input.slam-title').val(),
      body: $('input.word-input').val().split(' '),
      mode: 'group',
      pending: true,
      user: Fridgeslam.CURRENT_USER.id,
      current_slammer_id: Fridgeslam.CURRENT_USER.id,
      slammer_ids: Fridgeslam.addedMemberIds
    });

    var that = this;
    var onSave = function () {
      var slamMemberships = new Fridgeslam.Collections.SlamMemberships();
      Fridgeslam.addedMemberIds.forEach( function (memberId) {
        var newMembership = new Fridgeslam.Models.SlamMembership({
          slam_id: that.model.get('id'),
          user_id: memberId
        });
        newMembership.save();
      });
      Fridgeslam.addedMemberIds = [];
      alert('Slammin!');
      Backbone.history.navigate('#', { trigger: true });
    };

    this.model.save({},{
      success: onSave
    });
  },

  addFriendSubview: function (friend) {
    var that = this;
    var reqSubView = new Fridgeslam.Views.FriendIndexItem({
      model: friend,
    });

    this.addSubview('.friends-list', reqSubView);
  },

  render: function () {
    var that = this;
    var content = this.template({
      slam: that.model
    });

    this.$el.html(content);
    return this;
  }
});
