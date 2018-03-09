class TimelineCard {
  constructor(element, data, opts) {
    let self = this;
    let doc = document;
    let idCard = doc.getElementById('card');
    let cardContainer = doc.getElementsByClassName('container')[0];
    console.log('idCard', idCard)
    element.classList.add('timeline-card');
console.log(data)
data.forEach((el) => {
  console.log('el', el.data[0].from);
  let cardHeader = '<div class="header ' + el.label.toLowerCase() + '">' + el.label + '</div>';
  let sectionOne = '<div class="section"><p class="key">Treatment Start Date: </p><p class="value">' + el.startDate + '</p></div>';
  let sectionTwo = '<div class="section"><p class="key">Treatment Start Date: </p><p class="value">' + el.startDate + '</p></div>';
  let sectionThree = '<div class="section"><p class="key">Treatment Start Date: </p><p class="value">' + el.startDate + '</p></div>';
  let sectionFour = '<div class="section"><p class="key">Treatment Start Date: </p><p class="value">' + el.startDate + '</p></div>';
  let cardDetails = '<div class="details">' + sectionOne + sectionTwo + sectionThree + sectionFour + '</div>';
  cardContainer.insertAdjacentHTML('afterbegin', '<div class="card">' + cardHeader + cardDetails + '</div>');
  
});
  
 }
  
}

TimelineCard.TYPE = {
  POINT: Symbol(),
  INTERVAL: Symbol()
};

module.exports = TimelineCard;
