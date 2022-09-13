function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	//  function insertionSort(inputArr) {
	// 	let n = inputArr.length;
	// 		for (let i = 1; i < n; i++) {
	// 			// Choosing the first element in our unsorted subarray
	// 			let current = inputArr[i];
	// 			// The last element of our sorted subarray
	// 			let j = i-1; 
	// 			while ((j > -1) && (current < inputArr[j])) {
	// 				inputArr[j+1] = inputArr[j];
	// 				j--;
	// 			}
	// 			inputArr[j+1] = current;
	// 		}
	// 	return inputArr;
	// }
		for (let i = 0; i < array.length; i++) {
			let firstElement = array[i]
			let secondElement = array[i++]
			if(firstElement>secondElement){
				array[firstelement+1]=array[firstelement];
			}
		}

	return array;
}

module.exports = insertionSort;
