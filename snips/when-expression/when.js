/**
 * A class that represents a conditional expression.
 *
 * When is used to create a conditional expression that can be evaluated later.
 * To use When, first create an instance of the class with the value that you want to compare the conditional to.
 * Then, chain-call the `is()` method with the value that you want to compare against and a callback function.
 * The callback function will be executed if the two values are equal.
 * Optionally, call the `val()` method to get the result of the evaluation.
 *
 * @example
 * // Create a WhenExpression instance with the value 10 which will log 'The values are equal!' to the console
 * when(10)
 * 		.is(10, () => console.log('The values are equal!'))
 * 		.is(50, () => console.log('will never be called!'))
 *
 * @example
 * // Create a when expression with the value current
 * // the result of the expression (the return of the truthy callback) will be assigned to repeat.innerHTML
 * repeat.innerHTML = when(current)
 *		.is(0, () => 'repeat')
 *		.is(1, () => 'repeat_on')
 *		.is(2, () => 'repeat_one_on')
 *		.val();
 *
 * @class WhenExpression
 */
class WhenExpression {

	/**
	 * The result of the conditional expression.
	 *
	 * @type {any}
	 */
	#result;

	/**
	 * Creates a new When instance.
	 *
	 * @param {any} param The value that the conditional expression will be evaluated against.
	 */
	constructor(param) {
		this.param = param;
	}

	/**
	 * Evaluates the conditional expression and executes the callback function if the two values are equal.
	 *
	 * @param {any} val The value to compare against.
	 * @param {() => any} callback The callback function to execute if the two values are equal.
	 * @returns {When} This instance of When.
	 */
	is(val, callback) {
		if (this.#result != undefined) return this;

		if (this.param == val) this.evalsTo = callback();

		return this;
	}

	/**
	 * Gets the result of the evaluation.
	 *
	 * @returns {any} The result of the evaluation.
	 */
	val() {
		return this.#result;
	}
}

/**
 * Creates a new When instance.
 *
 * @param {any} param The value that the conditional expression will be
 * evaluated against.
 * @returns {WhenExpression} A new When instance.
 */
function when(param) {
	return new WhenExpression(param);
}


/*
example
when(5)
	.is(6, () => console.log('it is'))
	.is(7, () => console.log('welp!'));

const x = 5;
const y = when(x)
	.is(1, () => 'x is 1')
	.is(5, () => 'x is 5')
	.val();

// clunkier, but more versatile
function when2(operand) {
	if (arguments.length == 1) return;

	for (let i = 1; i < arguments.length; i++) {
		if (operand != arguments[i].val) continue;
		else return arguments[i].callback();
	}
}
function is(val, callback) {
	return { val, callback };
}

when2(5,
	is(6, () => console.log(5)),
	is(7, () => console.log('welp!'))
);
*/
