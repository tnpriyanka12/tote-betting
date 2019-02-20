
  const tabCalculator = {
    inputBetsArray: [],
    raceResults: '',
    commission: {
      win: 0.15,
      place: 0.12,
      exacta: 0.18
    },
    resultDividends: {}
  }

  const inputPatterns = {
    betFormat:  /^bet:[wpe]:\d+|\d+,\d+ :\d+$/i,
    resultFormat: /^result:\d+:\d+:\d+$/i
  }


  module.exports = {
    tabCalculator: tabCalculator,
    inputPatterns: inputPatterns
  }
