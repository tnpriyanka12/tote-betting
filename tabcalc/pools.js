//All three pools
const Tab = require('../tabcalc/tab.js');

module.exports = {

  calcRanks: function(){
    let firstRank  = Tab.tabCalculator.raceResults.split(':')[1];
    let secondRank = Tab.tabCalculator.raceResults.split(':')[2];
    let thirdRank  = Tab.tabCalculator.raceResults.split(':')[3];
    return({
      firstRank,
      secondRank,
      thirdRank
    })
  },


  //The total win yeild is calculates as
  // ($ total wagered money ) x (1 – commission%) / amount wagered on selected runner

  calcWinYeild: function (winInputArray, commission) {
    let poolAmount  = 0;
    let totalWinStake = 0;
    let yeild = 0;
    let ranks = this.calcRanks();


    for(let i=0; i<winInputArray.length; i++){
      let currObj      = winInputArray[i].split(':');
      let winSelection = currObj[2];
      let winStake     = parseFloat(currObj[3]);

      poolAmount += winStake;
      //Calculate total winning stake for the winner
      if(winSelection == ranks.firstRank){
        totalWinStake += winStake;
      }
    }

    yeild = (poolAmount * (1-commission)) / (totalWinStake);
    return yeild.toFixed(2);
  },


  calcPlaceYeild: function (placeInputArray, commission) {
    let poolAmount  = 0;
    let firstStake = 0, secondStake = 0, thirdStake = 0;
    let firstYeild = 0, secondYeild = 0, thirdYeild = 0;
    let yeild = 0;
    let ranks = this.calcRanks();


    for(let i=0; i<placeInputArray.length; i++){
      let currObj        = placeInputArray[i].split(':');
      let placeSelection = currObj[2];
      let placeStake     = parseFloat(currObj[3]);
      poolAmount += placeStake;
      //Calculate total winning stake for the winner
      switch(placeSelection) {
        case (ranks.firstRank):
          firstStake += placeStake;
          break;
        case (ranks.secondRank):
          secondStake += placeStake;
          break;
        case (ranks.thirdRank):
          thirdStake += placeStake;
          break;
        default:
          break;
        }
    }
    poolAmount = poolAmount/3;

    firstYeild  = (poolAmount * (1-commission)) / (firstStake);
    secondYeild = (poolAmount * (1-commission)) / (secondStake);
    thirdYeild  = (poolAmount * (1-commission)) / (thirdStake);

    firstYeild = firstYeild.toFixed(2);
    secondYeild = secondYeild.toFixed(2);
    thirdYeild = thirdYeild.toFixed(2);
    return ({
      firstYeild,
      secondYeild,
      thirdYeild
    })

  },



  calcExactaYeild: function (exactaInputArray, commission) {
    let poolAmount  = 0;
    let totalExactaStake = 0;
    let yeild = 0;
    let ranks = this.calcRanks();

    for(let i=0; i<exactaInputArray.length; i++){
      let currObj         = exactaInputArray[i].split(':');
      let exactaSelection = currObj[2];
      let exactaStake     = parseFloat(currObj[3]);
      let exactaRank      = ranks.firstRank + ',' + ranks.secondRank;
      poolAmount += exactaStake;
      //Calculate total winning stake for the winner
      if(exactaSelection == exactaRank){
        totalExactaStake += exactaStake;
      }
    }

    yeild = (poolAmount * (1-commission)) / (totalExactaStake);
    return yeild.toFixed(2);

  }
};
