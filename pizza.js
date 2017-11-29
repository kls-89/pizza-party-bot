var twit = require('twit');
var config = require('./config');

var T = new twit(config);

pizzaParty();

setInterval(pizzaParty, 1000 * 60 * 15);


function pizzaParty() {
    //Array of pizza toppings
    var toppings = ['cheese', 'extra cheese', 'pepperoni', 'sausage', 'ham', 'pineapple', 'sun-dried tomatoes', 'bacon', 'meatball', 'artichoke hearts', 'green pepper', 'roasted peppers', 'garlic', 'mushroom', 'onion', 'olive', 'broccoli', 'eggplant', 'prosciutto', 'anchovie', 'salami', 'tomato', 'spinach', 'feta', 'jalapeño', 'hamburger', 'ricotta', 'basil', 'chicken', 'bacon', 'bbq chicken', 'bbq pork'];
    // var randomIndex = getRandomIndex();
    let numberOfToppings = 3; //provide the user with 3 toppings from the total available.
    let combination = Math.floor((factorial(toppings.length)) / (factorial(numberOfToppings) * (factorial(toppings.length - numberOfToppings))));

    // Calculate the total number of possible combinations based on a toppings array of size N and a numberOfToppings value of R (n!)/(r!(n-r)!)
    var message = `This database contains ` + toppings.length + ` toppings. Here are ${numberOfToppings} random ones, out of ${combination} possible choices: `;

    // Basic recursive function to calculate factorials. Used for determining the total number of combinations of possible toppings, based on a toppings array of size N and a numberOfToppings value of R. See above.
    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    var finalTopping = [];

    for (i = 0; i < numberOfToppings; i++) {
        var randomIndex = Math.floor(Math.random() * toppings.length);
        finalTopping.push(toppings[randomIndex]);
    }
		var testVariable = finalTopping.slice(0, finalTopping.length - 1).join(", ").concat(", and " + finalTopping[finalTopping.length - 1]).concat(".");


		var tweet = {
		    status: `${testVariable} \#PizzaParty`
		}

		T.post('statuses/update', tweet, tweeted);

		function tweeted(err, data, response) {
		    if (err) {
		        console.log("something went wrong");
		    } else {
		        console.log("Pizza Party!");
		    }
		}
		console.log(message);
}
