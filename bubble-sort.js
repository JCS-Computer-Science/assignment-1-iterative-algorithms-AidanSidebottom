function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
   
    let length= array.length;
    for (let index1 = 0; index1 < length; index1++) {
        for (let index2 = 0; index2 < length; index2++) {
          if(array[index2]>array[index2+1]){
              let temporary =array[index2];
              array[index2] = array[index2+1];
              array[index2+1]= temporary;
          }
        }
    }
	return array;
}

module.exports = bubbleSort;
