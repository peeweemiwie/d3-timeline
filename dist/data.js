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
    global.data = mod.exports;
  }
})(this, function () {
  'use strict';

  var data = [{
    label: 'Surgery',
    startDate: '2016, 1, 23',
    data: [{
      customClass: 'dot surgery',
      type: TimelineChart.TYPE.POINT,
      at: new Date([2016, 1, 23])
    }, {
      label: 'mastectomy,_no',
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([2016, 1, 23]),
      to: new Date([2016, 5, 1]),
      customClass: 'dot-label surgery'
    }]
  }, {
    label: 'Radiation Therapy',
    startDate: '2016, 2, 15',
    data: [{
      label: "Intensity-modulated Radiation Therapy (IMRT)",
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([2016, 2, 15]),
      to: new Date([2016, 2, 20]),
      customClass: 'radiation'
    }]
  }, {
    label: 'Regimen',
    startDate: '2016, 3, 1',
    data: [{
      label: "CMF",
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([2016, 9, 25]),
      to: new Date([2017, 3, 4]),
      customClass: 'regimen'
    }, {
      label: "AC",
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([2016, 3, 1]),
      to: new Date([2016, 9, 15]),
      customClass: 'regimen'
    }]
  }, {
    label: 'Regimen Interval',
    startDate: '2016, 4, 2',
    data: [{
      label: "Investigational",
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([2016, 4, 2]),
      to: new Date([2016, 2, 3]),
      customClass: 'regimen-interval'
    }]
  }];
});
//# sourceMappingURL=data.js.map
