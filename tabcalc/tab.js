'use strict'

//This file contains variables or methods that are related to configuration & setup of the app

  const tabCalculator = {
    inputBetsArray: [],
    raceResults: '',
    commission: {
      win: 0.15,
      place: 0.12,
      exacta: 0.18
    },
    calcRanks: function(){
      let first  = this.raceResults.split(':')[1];
      let second = this.raceResults.split(':')[2];
      let third  = this.raceResults.split(':')[3];
      return({
        first,
        second,
        third
      })
    },
    result: ''
  };


  //Patterns to check the Bet abd Result format while taking input line by line from stdin
  const inputPatterns = {
    betFormat:  /^bet:[wpe]:\d+|\d+,\d+:\d+$/i,
    resultFormat: /^result:\d+:\d+:\d+$/i
  }

  module.exports = {
    tabCalculator: tabCalculator,
    inputPatterns: inputPatterns
  }
