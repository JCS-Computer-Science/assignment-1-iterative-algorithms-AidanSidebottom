function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	
		for (let i = 1; i < array.length; i++) {
		  let currentValue = array[i]
		  let j;
		  for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
			array[j + 1] = array[j]
		  }
		  array[j + 1] = currentValue
		}
		return array
	}


module.exports = insertionSort;
