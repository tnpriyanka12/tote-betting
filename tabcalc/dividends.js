

const Tab = require('../tabcalc/tab.js');

module.exports = {
  showDividends: function (winYeild, placeYeild, exactaYeild) {
    let winString = '';
    let placeString = '';
    let exactaString = '';
    let firstRank  = Tab.tabCalculator.raceResults.split(':')[1];
    let secondRank = Tab.tabCalculator.raceResults.split(':')[2];
    let thirdRank  = Tab.tabCalculator.raceResults.split(':')[3];

    winString   = `Win:${firstRank}:$${winYeild}\n`;
    placeString =  `Place:${firstRank}:$${placeYeild['firstYeild']}\n`;
    placeString += `Place:${secondRank}:$${placeYeild['secondYeild']}\n`;
    placeString += `Place:${thirdRank}:$${placeYeild['thirdYeild']}\n`;
    exactaString = `Exacta:${firstRank},${secondRank}:$${exactaYeild}\n`;

    return(winString+placeString+exactaString);

  }
};
