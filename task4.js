function getArrayIntersection(arr1, arr2) {
  const newArray = [];
  arr1.find(a => {
    if (arr2.includes(a) && !newArray.includes(a))
      newArray.push(a);
  });

  return newArray;
}

function getArrayUnion(arr1, arr2) {
  const newArray = [];
  const uniqueSet = new Set();
  const concatArray = [...arr1,...arr2];

  // Version 1
  // concatArray.map(x => {
  //   if(!newArray.includes(x))
  //     newArray.push(x);
  // });

  // version 2
  concatArray.map(x => {
    if(!uniqueSet.has(x)){
      uniqueSet.add(x);
      newArray.push(x);
    }
  });

  return newArray;

}

const array1 = [1,1,2,2,3,8];
const array2 = [8,4,5,5,3,1,1,3];

console.log(getArrayIntersection(array1,array2));

console.log(getArrayUnion(array1,array2));