'use strict'


// Extracts the Win , Place and Exacta arrays and
// returns the pool object that contains each of these arrays

module.exports = {
  poolObj: function (inputBetsArray) {

    let pool = {
      WinArray: [],
      PlaceArray: [],
      ExactaArray: []
    }

    for(let i=0; i<inputBetsArray.length; i++){
      if (inputBetsArray[i].indexOf(':W') > -1)
      {
        pool.WinArray.push(inputBetsArray[i]);
      }
      else if(inputBetsArray[i].indexOf(':P') > -1)
      {
        pool.PlaceArray.push(inputBetsArray[i]);
      }
      else if(inputBetsArray[i].indexOf(':E') > -1)
      {
        pool.ExactaArray.push(inputBetsArray[i]);
      }
    }
    return pool;

  }

};
