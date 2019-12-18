// Functions

function merge(leftArray, rigthArray) {
  console.log(leftArray, rigthArray);
  const sortedArrayLength = leftArray.length + rigthArray.length;
const sortedArray = new Array(sortedArrayLength);

//Add a sentinel in leftArray and rigthArray

leftArray.push(Infinity);
rigthArray.push(Infinity);

//Merge the array using for

let i = 0;
let j = 0;

for (let k = 0; k < sortedArrayLength; k++) {
  if (leftArray[i] <= rigthArray[j]) {
    sortedArray[k] = leftArray[i];
    i++;
  } else {
    sortedArray[k] = rigthArray[j];
    j++;
  }
}

return sortedArray;
}

function mergeSort(unsortedArray) {

  if (unsortedArray.length == 1) {
      return unsortedArray;
  } else {
    const startPoint = 0;
    const midPoint = Math.ceil(unsortedArray.length/2);
    const endPoint = unsortedArray.length;

    const leftArray = mergeSort(unsortedArray.slice(startPoint, midPoint));
    const rigthArray = mergeSort(unsortedArray.slice(midPoint, endPoint));
    return merge(leftArray, rigthArray);
  }
}

//TEST MERGESORT

const unsortedArray = [12, 9, 3, 7, 14, 11, 6, 2, 10, 5];
console.log("The array = " + unsortedArray);
const answerMergeSort = mergeSort(unsortedArray);
console.log(answerMergeSort);

//TEST MERGE

// const leftArray = [4, 7, 9, 12];
// const rigthArray = [2, 5, 6, 10];
// console.log(merge(leftArray, rigthArray));
