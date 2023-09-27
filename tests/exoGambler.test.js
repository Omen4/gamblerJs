import { describe, expect, test } from "@jest/globals";
import {gamble, generateCombinations, calculateCombinationIncome} from "../src/exoGambler.js"



const matchs = [
  {
    "name": "A.Hernandez vs B.Algeo",
    "1": 2.00,
    "x": 2,
    "2": 1.67
  },
  {
    "name": "P.Lins vs I.Cutelaba",
    "1": 2.00,
    "x": 2,
    "2": 1.67
  },
  {
    "name": "D.Dober vs R.Glenn",
    "1": 1.20,
    "x": 2,
    "2": 3.75
  },
]

const resultCombination = [
  [ '1', '1', '1' ], [ '1', '1', 'x' ],
  [ '1', '1', '2' ], [ '1', 'x', '1' ],
  [ '1', 'x', 'x' ], [ '1', 'x', '2' ],
  [ '1', '2', '1' ], [ '1', '2', 'x' ],
  [ '1', '2', '2' ], [ 'x', '1', '1' ],
  [ 'x', '1', 'x' ], [ 'x', '1', '2' ],
  [ 'x', 'x', '1' ], [ 'x', 'x', 'x' ],
  [ 'x', 'x', '2' ], [ 'x', '2', '1' ],
  [ 'x', '2', 'x' ], [ 'x', '2', '2' ],
  [ '2', '1', '1' ], [ '2', '1', 'x' ],
  [ '2', '1', '2' ], [ '2', 'x', '1' ],
  [ '2', 'x', 'x' ], [ '2', 'x', '2' ],
  [ '2', '2', '1' ], [ '2', '2', 'x' ],
  [ '2', '2', '2' ]]

  describe("generateCombinations", () => {
    test("should correspond to hand-picked array", () => {
      expect(generateCombinations(matchs)).toEqual(resultCombination);
  });

  describe("calculateIncome",()=>{
    test("should return income * bet for a combination",() => {
      expect(calculateCombinationIncome(gamble,matchs,100)).toEqual(775);
    })
  });
});


