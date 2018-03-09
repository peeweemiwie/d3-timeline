'use strict';

const element = document.getElementById('chart');

const timeline = new TimelineChart(element, data, {
  enableLiveTimer: true,
  tip: function (d) {
    return d.at || `${d.from}<br>${d.to}`;
  }
}).onVizChange(e => console.log(e));
