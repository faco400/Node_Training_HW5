function measureArrayPerformance(array, func){
  // console.time('measureArrayPerformance');
  const startTime = performance.now();
  func(array);
  const endTime = performance.now();
  // console.timeEnd('measureArrayPerformance');
  return `execution time: ${endTime - startTime} miliseconds`;
}

//filtering array to return numbers without repetitions
function customFilterRepetitionNumbers(array) {
  const uniqueElements = [];
  const uniqueMap = new Map();

  array.forEach(element => {
    const key = typeof(element === 'number') ? element : null// callback(element);
    if(!uniqueMap.has(key) && !(key === null) ){
      uniqueMap.set(key, true);
      uniqueElements.push(element);
    }

  });

  return uniqueElements;
}

//custom filter unique with no duplicate values as callback
function customFilterUnique(array) {
  const uniqueElements = []; // list of unique elements
  const hashTable = {}; // table of elements
  
  //for each element if not in table, initialize with count, otherwise increment count
  array.forEach(element => {
    const key = element;
    if(!hashTable[key]){
      hashTable[key] = {element, count: 1};
    } else {
      hashTable[key].count++;
    }
  });

  for(item in hashTable){
    if(hashTable[item].count == 1)
      uniqueElements.push(hashTable[item].element);
  }
  return uniqueElements;
}

// fixing 8 as chunkSize. Arrays with length not divisible by 4 doesnt work in this example
function chunkArrayToEight(array) {
  const chunkSize = 4;
  const newArray = [];
  let subArray = [];

  try {
    if( Number.isInteger(array.length / chunkSize)){
      let counter = 0;
      
      array.forEach(element => {
        //add element to subarray an increment counter
        subArray.push(element);
        counter++;

        //if division of counter and chunksize equals to 1 then reset counter and go to next chunk
        if((counter/chunkSize) == 1){
          counter = 0;
          newArray.push(subArray);
          subArray = []
        }

      });

    } else {
      throw new Error('Cannot divide array into chunks')
    }
  } catch (error) {
    return console.error(error)
  }
  return newArray
  
}

//getting intersection of arr1 and array2 of same length
function getArrayIntersection(arr1) {
  const newArray = [];
  arr1.find(a => {
    if (array2.includes(a) && !newArray.includes(a))
      newArray.push(a);
  });

  return newArray;
}

//getting arrayUnion using map and set
function getArrayUnion2(arr1) {
  const newArray = [];
  const uniqueSet = new Set();
  const concatArray = [...arr1,...array2];

  // version 2
  concatArray.map(x => {
    if(!uniqueSet.has(x)){
      uniqueSet.add(x); // this is not linear
      newArray.push(x);
    }
  });

  return newArray;
}

//getting arrayUnion using map and includes
function getArrayUnion1(arr1) {
  const newArray = [];
  const concatArray = [...arr1,...array2];

  // Version 1
  concatArray.map(x => {
    if(!newArray.includes(x))
      newArray.push(x);
  });

  return newArray;
}

//custom shuffle optimzed
function customShuffle(array) {
  for(let i = array.length; i > 0; i--){
    const j = Math.floor(Math.random() * (i));
    [array[i-1], array[j]] = [array[j], array[i-1]];
  }
  return array;
}

// custom shuffle not optimized, using filter
function customShuffleStd(array) {
  const newArray = [];

  for (let i = array.length; i > 0; i--){
    const pos = Math.floor(Math.random() * array.length);
    newArray.push(array[pos]);
    array = array.filter(number => number !== array[pos]);
  }
  
  return newArray;
}

const array = [1,2,3,4,5,5,3,1];
const array2 = Array.from({ length: array.length }, () => Math.random());

// ---------------------------------
//Performance capture of functions:
// console.log(measureArrayPerformance(array,customShuffle)); // best: 0.08880000002682209 miliseconds
// console.log(measureArrayPerformance(array,customShuffleStd)); // best: 0.11870000045746565 miliseconds

// console.log(measureArrayPerformance(array, customFilterRepetitionNumbers)); // best: 0.08799999952316284 miliseconds

// console.log(measureArrayPerformance(array, customFilterUnique)); // best: 0.15629999991506338 miliseconds

// console.log(measureArrayPerformance(array,chunkArrayToEight)); // best: 0.11290000006556511 miliseconds

// console.log(measureArrayPerformance(array,getArrayIntersection)); // best: 0.06790000014007092 miliseconds

// console.log(measureArrayPerformance(array,getArrayUnion2)); // best: 0.1176999993622303 miliseconds
// console.log(measureArrayPerformance(array,getArrayUnion1)); // best: 0.1006000004708767 miliseconds
// ---------------------------------