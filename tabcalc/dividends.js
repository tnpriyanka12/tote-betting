'use strict'

// Display dividends according to desired format


const Tab = require('../tabcalc/tab.js');

module.exports = {
  showDividends: function (winYeild, placeYeild, exactaYeild) {
    let winString = '';
    let placeString = '';
    let exactaString = '';
    let ranks = Tab.tabCalculator.calcRanks();

    winString   = `Win:${ranks.first}:$${winYeild}\n`;
    placeString =  `Place:${ranks.first}:$${placeYeild['firstYeild']}\n`;
    placeString += `Place:${ranks.second}:$${placeYeild['secondYeild']}\n`;
    placeString += `Place:${ranks.third}:$${placeYeild['thirdYeild']}\n`;
    exactaString = `Exacta:${ranks.first},${ranks.second}:$${exactaYeild}\n`;

    return(winString+placeString+exactaString);

  }
};
