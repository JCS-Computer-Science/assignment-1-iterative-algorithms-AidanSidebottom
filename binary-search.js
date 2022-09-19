function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	
	
	let start = 0;
	let end = array.length ;
	let middle;
	while(end-start >=1){
		middle = Math.floor((start+end)/2)
			if (array[middle]==searchTerm){
				return middle;
		}else if (array[middle]<searchTerm){
			start = middle;
		} else{
			end = middle;
		}
	}
}

module.exports = binarySearch;