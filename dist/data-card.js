(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.dataCard = mod.exports;
  }
})(this, function () {
  'use strict';

  var elementCard = document.getElementById('card');

  var timelineCard = new TimelineCard(elementCard, data, {});
});
//# sourceMappingURL=data-card.js.map
