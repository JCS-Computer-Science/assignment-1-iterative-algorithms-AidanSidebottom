function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	let smallest= Math.min(array);
	console.log(smallest);
	for (let index = 0; index < array.length; index++) {
	
		
	}
	return array;
}

module.exports = selectionSort;
