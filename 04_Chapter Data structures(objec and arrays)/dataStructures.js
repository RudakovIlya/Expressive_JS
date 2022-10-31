// Chapter: Data structures (objects and arrays)

// Task: The sum of a range

// Solution: 

const range = (start, end, step = start < end ? 1 : -1) => {
	const arr = [];

	if (step > 0) {
		for (let i = start; i <= end; i += step) arr.push(i);
	} else {
		for (let i = start; i >= end; i += step) arr.push(i);
	}
	return arr;
}

const sum = (arr) => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum
}

/*------------------------------------------------------*/

// Chapter: Data structures (objects and arrays)

// Task: Reversing an array

// Solution: 

const reverseArray = (arr) => {
	const newArr = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i])
	}

	return newArr;

}

const reverseArrayInPlace = (array) => {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {

		let oldValue = array[i];

		array[i] = array[array.length - 1 - i];

		array[array.length - 1 - i] = oldValue;

	}
	return array;
}

/*------------------------------------------------------*/

// Chapter: Data structures (objects and arrays)

// Task: A list

// Solution: 

function arrayToList(arr) {

	let list = null;

	for (let i = arr.length - 1; i >= 0; i--) {

		list = { value: arr[i], rest: list };

	}

	return list;

}

function listToArray(list) {

	let arr = [];

	for (let node = list; node; node = node.rest) {

		arr.push(node.value)

	}

	return arr

}

function prepend(value, list) {

	return { value, rest: list };

}

function nth(list, n) {

	if (!list) return undefined;

	else if (n == 0) return list.value;

	else return nth(list.rest, n - 1);

}

console.log(arrayToList([1, 2, 3]));