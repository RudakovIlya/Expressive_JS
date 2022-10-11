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

console.log(isEven(2));

