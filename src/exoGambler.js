export const gamble = ['1', '1', '2']
const betAmount = 100;
const matchList = [
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
    // {
    //     "name": "A.Morono vs J.Buckley",
    //     "1": 2.40,
    //     "x": 2,
    //     "2": 1.48
    // },
    // {
    //     "name": "J.Pyfer vs A.R.Alhassan",
    //     "1": 1.24,
    //     "x": 2,
    //     "2": 3.50
    // },
    // {
    //     "name": "G.Dawson vs B.Green",
    //     "1": 1.22,
    //     "x": 2,
    //     "2": 3.75
    // },
    // {
    //     "name": "L.Carmouche vs I-L.Macfarlane",
    //     "1": 1.50,
    //     "x": 2,
    //     "2": 2.35
    // },
    // {
    //     "name": "R.Bader vs L.Vassel",
    //     "1": 1.50,
    //     "x": 2,
    //     "2": 2.35
    // },
    // {
    //     "name": "C.Justino Cyborg vs C.Zingano",
    //     "1": 1.15,
    //     "x": 2,
    //     "2": 4.70
    // },
    // {
    //     "name": "L.Carmouche vs I-L.Macfarlane",
    //     "1": 1.50,
    //     "x": 2,
    //     "2": 2.35
    // },
    // {
    //     "name": "U.Nurmagomedov vs B.Primus",
    //     "1": 1.05,
    //     "x": 2,
    //     "2": 7.50
    // },
    // {
    //     "name": "S.Yusuff vs E.Barboza",
    //     "1": 1.48,
    //     "x": 2,
    //     "2": 2.40
    // },
    // {
    //     "name": "P.Costa vs K.Chimaev",
    //     "1": 3.75,
    //     "x": 2,
    //     "2": 1.22
    // },
    // {
    //     "name": "M.Ankalaev vs J.Walker",
    //     "1": 1.17,
    //     "x": 2,
    //     "2": 4.00
    // },
    // {
    //     "name": "I.Makhachev vs C.Oliveira",
    //     "1": 1.25,
    //     "x": 2,
    //     "2": 3.50
    // },
]

export const generateCombinations = (matches) => {
    const accumulator = [[]];

    // Use reduce to iterate through matches and generate combinations
    return matches.reduce((combinations, match) => {
        // For each existing combination, create three new combinations
        const newCombinations = combinations.flatMap((combination) => [
            [...combination, '1'],
            [...combination, 'x'],
            [...combination, '2'],
        ]);
        // const newCombinations = combinations.flatMap((combination) => [
        //     [...combination, { matchName: match.name, bet: '1' }],
        //     [...combination, { matchName: match.name, bet: 'x' }],
        //     [...combination, { matchName: match.name, bet: '2' }],
        // ]);

        return newCombinations;
    }, accumulator);
};

const betCombinations = generateCombinations(matchList);

// Calculate the income for a single bet combination for a specific match
export const calculateCombinationIncome = (combination, matchList, betAmount) => {
    let totalIncome = 0;

    // Iterate through each match in the combination
    combination.forEach((bet, index) => {
        const match = matchList[index]; // Get the corresponding match object
        const betValue = match[bet]; // Get the odds for the selected bet

        betValue
            // If the odds are defined, calculate the income for this bet
            ? totalIncome += betAmount * betValue
            // Handle the case where the odds are not defined (e.g., 'x' for a match)
            : console.error(`Tu as foiré ton tableau jack`)
        ;
    });
    return totalIncome;
};

// Calculate the income for all combinations
const incomes = betCombinations.map((combination) => {
    const income = calculateCombinationIncome(combination, matchList, betAmount);
    return { combination, income };
});


//Calculate the bet needed to cover for all combinations - called Dutching -
const totalCombinations = betCombinations.length;
const betAmountPerCombination = betAmount / totalCombinations;
console.log("Dutching amount::::",betAmountPerCombination)
