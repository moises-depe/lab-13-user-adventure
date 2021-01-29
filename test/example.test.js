import hpScore from '../results/hp-score.js';
import coinScore from '../results/hp-score.js';

// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('hpScore should take in a number & return a stringy', (expect) => {


    //Arrange
    // Set up your arguments and expectations
    const hp = 80;

    const expected = 'healthy';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = hpScore(hp);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('coinScore should take in a number & return a stringy', (expect) => {


    //Arrange
    // Set up your arguments and expectations
    const coin = 0;

    const expected = 'dead';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = coinScore(coin);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

