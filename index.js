// Chapter: Function

// Task: Minimum

// Solution: 

const min = (a, b) => a > b ? b : a;

/*------------------------------------------------------*/

// Chapter: Function

// Task: Recursion

// Solution: 

const isEven = (num) => {

	if (num == 0) {
		return true
	}

	else if (num == 1) {
		return false
	}

	else if (num < 0) {
		return isEven(-num)
	}

	return isEven(num - 2);

};

/*------------------------------------------------------*/

// Chapter: Function

// Task: Bean Counting

// Solution:


const countChar = (str, char) => {

	let count = 0;

	for (let i = 0; i < str.length; i++) {

		const symb = str[i];

		if (symb == char) {
			count += 1
		}

	}
	return count
}

const countBs = (str) => {
	return countChar(str, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

/*===================================================================================*/

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
