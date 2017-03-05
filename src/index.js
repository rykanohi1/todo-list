//document.write("hello world");
// my program will display a picture of a button using html code
// the picture can be interacted with using javascript code
// by clicking on it.
// when clicked on, the button should send the user to a link to another site
// to detect a mouse click, my button should respond to when the user
// presses their mouse down on the button
const doc = document;

const Box = function (x) {
	return {
		map(func) {
			return Box(func(x));
		},
		fold(func)
		{
			return func(x);
		}
	}
};

const equation = (boxOfNum) => boxOfNum
      .map(num => num + 1)
      .fold(num => num * 10);

// clearInterval(intervalId)
const click = 'click';
const result = 'result';
let intervalId;
const DEFAULT_COUNTER_VALUE = 0;

function printCounterStatus(num) {
	return `<h1>Hello World: ${num}</h1>`;
}

// Get input from the user (first and last name), from two input fields
// concatenate the input (e.g.,Yaron, Rob). Validate the input
// no integers allowed. If there is a validationerror, print out the error
// to a results section below the inputs. Make it red. (e.g,
// "integers now allowed"). Use Box to map all of the steps in in formatting
// the value of the input fields--if you can.
doc.querySelector('#calculate').addEventListener(click, ()=>{
			const output = doc.getElementById(result);
			let num = 1;
			intervalId = setInterval(() => {
				output.innerHTML = printCounterStatus(num);
				num++;
			}, 500);
});

// stop the counter when the stop counter button is clicked
doc.querySelector('#stop').addEventListener(click, ()=>{
			const output = doc.getElementById(result);
			clearInterval(intervalId);
			output.innerHTML = printCounterStatus(DEFAULT_COUNTER_VALUE);
});

//experiment with strings and numbers with box, invent some functions with box
// like this one
