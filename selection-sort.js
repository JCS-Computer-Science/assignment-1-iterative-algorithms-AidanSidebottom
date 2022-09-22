function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	let length = array.length;
	
	for (let i = 0; i < length; i++) {
		let min = i;
        for(let j = i+1; j < length; j++){
            if(array[j] < array[min]) {
                min=j; 
		}
	}
	if (min != i){
		let temporary = array[i];
		array[i] = array[min];
		array[min] = temporary;
	}	
}
return array;
}

module.exports = selectionSort;
