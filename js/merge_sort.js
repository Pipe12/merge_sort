// Functions

function mergeSort(unsortedArray) {
  console.log("The array = " + unsortedArray);

  if (unsortedArray.length == 1) {
      return unsortedArray;
  } else {
    const startPoint = 0;
    const midPoint = Math.ceil(unsortedArray.length/2);
    const endPoint = unsortedArray.length;

    const leftArray = mergeSort(unsortedArray.slice(startPoint, midPoint));
    const rigthArray = mergeSort(unsortedArray.slice(midPoint, endPoint));

  }
}

//TEST MERGESORT

const unsortedArray = [12, 9, 3, 7, 14, 11, 6, 2, 10, 5];

const answerMergeSort = mergeSort(unsortedArray);
