// shuffle standard
// function customShuffle(array) {
//   const newArray = [];

//   for (let i = array.length; i > 0; i--){
//     const pos = Math.floor(Math.random() * array.length);
//     newArray.push(array[pos]);
//     array = array.filter(number => number !== array[pos]);
//   }
  
//   return newArray;
// }

// efficient shuffle (Fisher-Yates Algorithm)
function customShuffle(array) {
  for(let i = array.length; i > 0; i--){
    const j = Math.floor(Math.random() * (i));
    [array[i-1], array[j]] = [array[j], array[i-1]];
  }
  return array;
}

const array = [1,2,3,4,5];

console.log(customShuffle(array));
