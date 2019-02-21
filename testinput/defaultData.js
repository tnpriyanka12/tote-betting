let betsArray = [
  'Bet:W:1:3',
  'Bet:W:2:4',
  'Bet:W:3:5',
  'Bet:W:4:5',
  'Bet:W:1:16',
  'Bet:W:2:8',
  'Bet:W:3:22',
  'Bet:W:4:57',
  'Bet:W:1:42',
  'Bet:W:2:98',
  'Bet:W:3:63',
  'Bet:W:4:15',
  'Bet:P:1:31',
  'Bet:P:2:89',
  'Bet:P:3:28',
  'Bet:P:4:72',
  'Bet:P:1:40',
  'Bet:P:2:16',
  'Bet:P:3:82',
  'Bet:P:4:52',
  'Bet:P:1:18',
  'Bet:P:2:74',
  'Bet:P:3:39',
  'Bet:P:4:105',
  'Bet:E:1,2:13',
  'Bet:E:2,3:98',
  'Bet:E:1,3:82',
  'Bet:E:3,2:27',
  'Bet:E:1,2:5',
  'Bet:E:2,3:61',
  'Bet:E:1,3:28',
  'Bet:E:3,2:25',
  'Bet:E:1,2:81',
  'Bet:E:2,3:47',
  'Bet:E:1,3:93',
  'Bet:E:3,2:51',
  'Result:2:3:1'
];

let result = [
  'Win:2:$2.61',
  'Place:2:$1.06',
  'Place:3:$1.27',
  'Place:1:$2.13',
  'Exacta:2,3:$2.43'
];


let winInputArray = [
  'Bet:W:1:3',
  'Bet:W:2:4',
  'Bet:W:3:5',
  'Bet:W:4:5',
  'Bet:W:1:16',
  'Bet:W:2:8',
  'Bet:W:3:22',
  'Bet:W:4:57',
  'Bet:W:1:42',
  'Bet:W:2:98',
  'Bet:W:3:63',
  'Bet:W:4:15'
];

let placeInputArray = [
     'Bet:P:1:31',
     'Bet:P:2:89',
     'Bet:P:3:28',
     'Bet:P:4:72',
     'Bet:P:1:40',
     'Bet:P:2:16',
     'Bet:P:3:82',
     'Bet:P:4:52',
     'Bet:P:1:18',
     'Bet:P:2:74',
     'Bet:P:3:39',
     'Bet:P:4:105'
   ];

let exactaInputArray = [
     'Bet:E:1,2:13',
     'Bet:E:2,3:98',
     'Bet:E:1,3:82',
     'Bet:E:3,2:27',
     'Bet:E:1,2:5',
     'Bet:E:2,3:61',
     'Bet:E:1,3:28',
     'Bet:E:3,2:25',
     'Bet:E:1,2:81',
     'Bet:E:2,3:47',
     'Bet:E:1,3:93',
     'Bet:E:3,2:51'
   ];


let betsArraySmall = [
  'Bet:W:1:3',
  'Bet:W:2:4',
  'Bet:W:3:5',
  'Bet:P:1:31',
  'Bet:P:2:89',
  'Bet:P:3:28',
  'Bet:E:2,3:47',
  'Bet:E:1,3:93',
  'Bet:E:3,2:51',
  'Result:2:3:1'
];

let poolObjSmall =
  { WinArray: [ 'Bet:W:1:3', 'Bet:W:2:4', 'Bet:W:3:5' ],
    PlaceArray: [ 'Bet:P:1:31', 'Bet:P:2:89', 'Bet:P:3:28' ],
    ExactaArray: [ 'Bet:E:2,3:47', 'Bet:E:1,3:93', 'Bet:E:3,2:51' ]
  };



  module.exports = {
    betsArraySmall: betsArraySmall,
    poolObjSmall: poolObjSmall,
    betsArray: betsArray,
    result: result,
    winInputArray: winInputArray,
    placeInputArray: placeInputArray,
    exactaInputArray: exactaInputArray
  }
