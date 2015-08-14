window.Fridgeslam = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var router = new Fridgeslam.Routers.Router();
    Backbone.history.start();

    var pending = Fridgeslam.CURRENT_USER.pendingSlams;
    // var fs = require('fs');
    // var words = fs.readFileSync('/assets/wordlist.txt').toString().split("\n");
    // console.log(words);
  }
};
