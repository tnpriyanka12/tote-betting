# Tote-betting APP
A betting app that calculates the dividends for a simplified form of Tote betting for
Tabcorp.  The app takes stdin input from user and displays the results on stdout

The calculator follows the following criteria:


##### WIN
Punters must choose the winner of a race
Tabcorp takes a 15% commission from the Win pool
The remaining total is split, proportionally to stake, amongst punters who chose the correct winning horse.


##### PLACE
Punters must choose the first, second or third place horse in a race
Tabcorp takes a 12% commission from the Place pool
The total pool is split evenly into 3 and each of these amounts is then split, proportionally to stake,
amongst the punters who chose each placed horse


##### EXACTA
Punters must choose the first and second place runners in a race in the correct order
Tabcorp takes an 18% commission from the Exacta pool
The remaining total is split, proportionally to stake, amongst punters who chose the correct first and
second horse in correct order

###### Sample Input to be given in stdin:
Copy Paste the content from /testinput/defaultinput.txt


###### Sample Output:
```
Win:2:$2.61
Place:2:$1.06
Place:3:$1.27
Place:1:$2.13
Exacta:2,3:$2.43
```

# Folder Structure :
`index.js`   -> Main file
`/tabcalc`   -> includes all the files related to calculation logic of the betting app
`/testinput` -> includes all the files that have sample inputs to the project
`/tests    ` -> includes all the files to test the app

# Tech stack:
- NODEJS Framework
- Mocha & Chai - Dev Frameworks for Testing


# How to run

As a first step, run `npm install`, after cloning the project,


Then,


`npm run start`     -> Will start the test and prompt the user for input(`index.js` is the main file)


`npm run test`      -> Will run all the unit tests available recursively
