function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	
	let lowNum = array[0];
	let highNum = array[array.length];
	let x;
	let middleNum;
	while (x=true){
		middleNum = Math.floor((lowNum+highNum)/2);
		if (array[middleNum]>searchTerm){
			highNum=array[middleNum];
			
		}
		if (array[middleNum]<searchTerm){
			lowNum=array[middleNum];
			
		}
		
		if (middleNum===searchTerm){
			return array[middleNum]; 
			x=false;
		}
	}
	
}

module.exports = binarySearch;