(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.TimelineCard = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TimelineCard = function TimelineCard(element, data, opts) {
    _classCallCheck(this, TimelineCard);

    var self = this;
    var doc = document;
    var idCard = doc.getElementById('card');
    var cardContainer = doc.getElementsByClassName('container')[0];
    console.log('idCard', idCard);
    element.classList.add('timeline-card');
    console.log(data);
    data.forEach(function (el) {
      console.log('el', el.data[0].from);
      var cardHeader = '<div class="header ' + el.label.toLowerCase() + '">' + el.label + '</div>';
      var sectionOne = '<div class="section"><p class="key">Treatment Start Date: </p><p class="value">' + el.startDate + '</p></div>';
      var sectionTwo = '<div class="section"><p class="key">Treatment End Date: </p><p class="value">' + el.endDate + '</p></div>';
      var sectionThree = '<div class="section"><p class="key">Treatment Start Date: </p><p class="value">' + el.startDate + '</p></div>';
      var sectionFour = '<div class="section"><p class="key">Treatment Start Date: </p><p class="value">' + el.startDate + '</p></div>';
      var cardDetails = '<div class="details">' + sectionOne + sectionTwo + sectionThree + sectionFour + '</div>';
      cardContainer.insertAdjacentHTML('afterbegin', '<div class="card">' + cardHeader + cardDetails + '</div>');
    });
  };

  TimelineCard.TYPE = {
    POINT: Symbol(),
    INTERVAL: Symbol()
  };

  module.exports = TimelineCard;
});
//# sourceMappingURL=timeline-card.js.map
