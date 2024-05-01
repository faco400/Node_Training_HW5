
// Version 1
function chunkArray(array,chunkSize) {
  const newArray = [];
  let subArray = [];
  let counter = 0;
  let endArray = 0;
    
  array.forEach(element => {
    //add element to subarray an increment counter
    subArray.push(element);
    counter++;
    endArray++;

    //if division of counter and chunksize equals to 1 then reset counter and go to next chunk
    if(counter == chunkSize || endArray == array.length){
      counter = 0;
      newArray.push(subArray);
      subArray = [];
    }

  });

  return newArray
  
}

// Version 2
// function chunkArray(array, chunkSize) {
//   const chunks = [];
//   let i = 0;
//   while (i < array.length) {
//     chunks.push(array.slice(i, (i += chunkSize)));
//   }
//   return chunks;
// }

// const array = [1,2,3,4];
// console.log(chunkArray(array,2));


// const arr = [1, 2, 3, ['a', 12, 'b'], 4, 5, 6, { c: 13 }, 7, 8, 9, 10, { d: 14, e: 15}];
// console.log(chunkArray(arr,8));
