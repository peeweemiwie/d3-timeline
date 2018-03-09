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
    global.dataChart = mod.exports;
  }
})(this, function () {
  'use strict';

  var element = document.getElementById('chart');

  var timeline = new TimelineChart(element, data, {
    enableLiveTimer: true,
    tip: function tip(d) {
      return d.at || d.from + '<br>' + d.to;
    }
  }).onVizChange(function (e) {
    return console.log(e);
  });
});
//# sourceMappingURL=data-chart.js.map
