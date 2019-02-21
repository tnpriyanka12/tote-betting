//The three pools are divided here
//Individual pools' yeilds are calculated separately


const Tab = require('../tabcalc/tab.js');

module.exports = {

  //The total win yeild is calculates as
  // ($ total wagered money ) x (1 – commission%) / amount wagered on selected runner

  //Calculate the Win Yeild
  calcWinYeild: function (winInputArray, commission) {
    let poolAmount  = 0;
    let totalWinStake = 0;
    let yeild = 0;
    let ranks = Tab.tabCalculator.calcRanks();
    for(let i=0; i<winInputArray.length; i++){
      let currObj      = winInputArray[i].split(':');
      let winSelection = currObj[2];
      let winStake     = parseFloat(currObj[3]);

      poolAmount += winStake;
      //Calculate total winning stake for the winner
      if(winSelection == ranks.first){
        totalWinStake += winStake;
      }
    }

    yeild = (totalWinStake!== 0) ? (poolAmount * (1-commission)) / (totalWinStake): 0;
    return yeild.toFixed(2);

  },

  //Calculate the Place Yeild
  calcPlaceYeild: function (placeInputArray, commission) {
    let poolAmount  = 0;
    let firstStake = 0, secondStake = 0, thirdStake = 0;
    let firstYeild = 0, secondYeild = 0, thirdYeild = 0;
    let yeild = 0;
    let ranks = Tab.tabCalculator.calcRanks();


    for(let i=0; i<placeInputArray.length; i++){
      let currObj        = placeInputArray[i].split(':');
      let placeSelection = currObj[2];
      let placeStake     = parseFloat(currObj[3]);
      poolAmount += placeStake;
      //Calculate total winning stake for the first, second and third place
      switch(placeSelection) {
        case (ranks.first):
          firstStake += placeStake;
          break;
        case (ranks.second):
          secondStake += placeStake;
          break;
        case (ranks.third):
          thirdStake += placeStake;
          break;
        default:
          break;
        }
    }
    poolAmount = poolAmount/3;

    firstYeild  = firstStake!== 0 ?  (poolAmount * (1-commission)) / (firstStake) : 0;
    secondYeild = secondStake!== 0 ?  (poolAmount * (1-commission)) / (secondStake): 0;
    thirdYeild  = thirdStake!== 0 ?  (poolAmount * (1-commission)) / (thirdStake) : 0;

    firstYeild = firstYeild.toFixed(2);
    secondYeild = secondYeild.toFixed(2);
    thirdYeild = thirdYeild.toFixed(2);
    return ({
      firstYeild,
      secondYeild,
      thirdYeild
    })

  },


  //Calculate the Exacta Yeild
  calcExactaYeild: function (exactaInputArray, commission) {
    let poolAmount  = 0;
    let totalExactaStake = 0;
    let yeild = 0;
    let ranks = Tab.tabCalculator.calcRanks();

    for(let i=0; i<exactaInputArray.length; i++){
      let currObj         = exactaInputArray[i].split(':');
      let exactaSelection = currObj[2];
      let exactaStake     = parseFloat(currObj[3]);
      let exactaRank      = ranks.first + ',' + ranks.second;

      poolAmount += exactaStake;
      //Calculate total winning stake for the winning order
      if(exactaSelection == exactaRank){
        totalExactaStake += exactaStake;
      }
    }

    yeild = totalExactaStake !== 0 ? (poolAmount * (1-commission)) / (totalExactaStake) : 0;
    return yeild.toFixed(2);

  }
};
