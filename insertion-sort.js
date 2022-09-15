function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	let length = array.length;
		for (let i = 1; i < length; i++){
		let element1 = array[i];
		let index2 = i-1;
		while((index2 > -1)&&(element1 < array[index2])){
		index2--;
		}
		array[index2+1]=element1;
		}
	console.log(array)
	return array;
}

module.exports = insertionSort;
