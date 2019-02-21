'use strict'


var defaultData   = require('../testinput/defaultData.js');
var ExtractData   = require('../tabcalc/extractData.js');
var Pools         = require('../tabcalc/pools.js');
var Dividends     = require('../tabcalc/dividends.js');
var Tab           = require('../tabcalc/tab.js');




const expect = require('chai').expect
const assert = require('assert');

describe('DEFAULT TEST', function(){
  it('should return true', () => {
    assert.equal(true, true);
  });
})

describe('extractData', function(){
  let inputBetsArray = defaultData.betsArraySmall;
  let poolObj = defaultData.poolObjSmall;

  it('exists', function () {
      expect(ExtractData.poolObj).to.be.a('function')
  });

  it('input is an Array of length atleast 1', function () {
    expect(inputBetsArray).to.be.an.instanceof(Array)
    expect(inputBetsArray).to.have.lengthOf.at.least(1)
  });

  it('should return and object of arrays', () => {
    expect(ExtractData.poolObj(inputBetsArray)).to.deep.equal(poolObj);
  });
});


describe('pools', function(){

  describe('winPool', function(){
    let winInputArray = defaultData.winInputArray;
    let commission    = Tab.tabCalculator.commission.win;
    let expectedYeild = '2.61';
    Tab.tabCalculator.raceResults = 'Result:2:3:1';

    //WIN POOL
    it('exists', function () {
        expect(Pools.calcWinYeild).to.be.a('function')
    });

    it('one input is an Array of length atleast 1', function () {
      expect(winInputArray).to.be.an.instanceof(Array)
      expect(winInputArray).to.have.lengthOf.at.least(1)
    });

    it('second input(commission) is a float value less than 1 and greater than 0', function () {
      expect(commission).to.be.a('Number');
      expect(commission).to.be.within(0,1);
      expect(commission).to.equal(0.15);
    });

    it('should return a float value with precision upto 2 points', () => {
      expect(Pools.calcWinYeild(winInputArray, commission)).to.equal(expectedYeild);
    });
  });


  describe('placePool', function(){
    let placeInputArray = defaultData.placeInputArray;
    let commission    = Tab.tabCalculator.commission.place;
    let expectedYeild = {
      firstYeild: '1.06',
      secondYeild: '1.27',
      thirdYeild: '2.13'
    }
    Tab.tabCalculator.raceResults = 'Result:2:3:1';


    //PLACE POOL
    it('exists', function () {
        expect(Pools.calcPlaceYeild).to.be.a('function')
    });

    it('one input is an Array of length atleast 1', function () {
      expect(placeInputArray).to.be.an.instanceof(Array)
      expect(placeInputArray).to.have.lengthOf.at.least(1)
    });

    it('second input(commission) is a float value less than 1 and greater than 0', function () {
      expect(commission).to.be.a('Number');
      expect(commission).to.be.within(0,1);
      expect(commission).to.equal(0.12);

    });

    it('should return a object value with float values precision upto 2 points', () => {
      expect(Pools.calcPlaceYeild(placeInputArray, commission)).to.deep.equal(expectedYeild);
    });
  });

  describe('exactaPool', function(){

    let exactaInputArray = defaultData.exactaInputArray;
    let commission    = Tab.tabCalculator.commission.exacta;
    let expectedYeild = '2.43';
    Tab.tabCalculator.raceResults = 'Result:2:3:1';
    //EXACTA POOL
    it('exists', function () {
        expect(Pools.calcWinYeild).to.be.a('function')
    });

    it('one input is an Array of length atleast 1', function () {
      expect(exactaInputArray).to.be.an.instanceof(Array)
      expect(exactaInputArray).to.have.lengthOf.at.least(1)
    });

    it('second input(commission) is a float value less than 1 and greater than 0', function () {
      expect(commission).to.be.a('Number');
      expect(commission).to.be.within(0,1);
      expect(commission).to.be.equal(0.18);
    });

    it('should return a float value with precision upto 2 points', () => {
      expect(Pools.calcExactaYeild(exactaInputArray, commission)).to.equal(expectedYeild);
    });
  });

  });


  describe('dividends', function(){
    Tab.tabCalculator.raceResults = 'Result:2:3:1';
    let winYeild = '2.61';
    let placeYeild = {
      firstYeild: '1.06',
      secondYeild: '1.27',
      thirdYeild: '2.13'
    };
    let exactaYeild = '2.43';
    let expectedOutput = "Win:2:$2.61\nPlace:2:$1.06\nPlace:3:$1.27\nPlace:1:$2.13\nExacta:2,3:$2.43\n";

    it('exists', function () {
        expect(Dividends.showDividends).to.be.a('function')
    });

    it('inputs for win and exacta are all single String values', function () {
      expect(winYeild).to.be.a('String');
      expect(exactaYeild).to.be.a('String');
    });
    it('inputs for place is an object', function () {
      expect(placeYeild).to.be.an('Object');
    });

    it('should return output in a formatted way', () => {
      expect(Dividends.showDividends(winYeild, placeYeild, exactaYeild)).to.equal(expectedOutput);
    });
  });


  describe('zeroData', function(){
    let inputBetsArray = [];
    let poolObj = {
      WinArray: [],
      PlaceArray: [],
      ExactaArray: []
    };
    let commission = 0.12;
    let expectedYeild = '0.00';
    it('exists', function () {
        expect(ExtractData.poolObj).to.be.a('function')
    });

    it('input is an Array of length 0', function () {
      expect(inputBetsArray).to.be.an.instanceof(Array)
      expect(inputBetsArray).to.have.lengthOf(0)
    });

    it('should return and object of empty arrays', () => {
      expect(ExtractData.poolObj(inputBetsArray)).to.deep.equal(poolObj);
    });

    it('should return a value 0.00 with precision upto 2 points', () => {
      expect(Pools.calcWinYeild(poolObj.WinArray, commission)).to.equal(expectedYeild);
    });

  });
