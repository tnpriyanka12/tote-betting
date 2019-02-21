//Main file


'use strict';
var Tab           = require('./tabcalc/tab.js');
var ExtractData   = require('./tabcalc/extractData.js');
var Pools         = require('./tabcalc/pools.js');
var Dividends     = require('./tabcalc/dividends.js');

  //Prompt the user for input
  console.log('Please input your data as follows:\nBet:W:1:3 \nBet:W:2:4\n ..\n ..\nBet:E:3,2:51 \nResult:2:3:1 \n\n');

  // Read the input by each line
  const readline = require('readline');
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  //Reading input
  // - Check for the valid patterns, i.e BetType:<product>:<selections>:<stake>
  // - Push to array only if input follows the valid pattern
  // - Check for the endline, i.e, Result:<first>:<second>:<third> and exit
  // - Store results only if input follows the valid pattern

  rl.on('line', function(line){
     //Remove new line of the line
      line.slice(0, line.length - 1);
      var lineLowerCase = line.toLowerCase();
      if(Tab.inputPatterns.resultFormat.test(lineLowerCase)){
        Tab.tabCalculator.raceResults = line;

        //User input ends here. Start calculating divdends
        //Step1 - Seperate win, place and extacta arrays into one object 'poolData'
        //Step2 - Calculate the yeilds of all the pools
        //Step3 - Generate the appropriate display for the yeilds and display the output to stdout

        //Step1
        var poolData = ExtractData.poolObj(Tab.tabCalculator.inputBetsArray);
        console.log(poolData);
        //Step2
        var winYeild = Pools.calcWinYeild(poolData.WinArray,Tab.tabCalculator.commission.win);
        var placeYeild = Pools.calcPlaceYeild(poolData.PlaceArray,Tab.tabCalculator.commission.place);
        var exactaYeild = Pools.calcExactaYeild(poolData.ExactaArray,Tab.tabCalculator.commission.exacta);
        //Step3
        let dividends = Dividends.showDividends(winYeild, placeYeild, exactaYeild);
        //Print the final result
        process.stdout.write('\n\nFinal Outcome:\n');
        process.stdout.write(dividends);

        process.exit(0);
      }
      else {
        if(Tab.inputPatterns.betFormat.test(lineLowerCase)){
          Tab.tabCalculator.inputBetsArray.push(line);
        }
        else {
          console.log('OOPS! Input format seems to be wrong! Please check and re-enter');
          process.exit(0);
        }
      }

  })
