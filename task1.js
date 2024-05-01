function customFilterUnique(array, callback) {
  const uniqueElements = []; // list of unique elements
  const hashTable = {}; // table of elements
  
  //for each element if not in table, initialize with count, otherwise increment count
  array.forEach(element => {
    const key = callback(element);
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

// -----------------------------------
// const array = [1, 2, 'a', 'b', 2, 'b', 3];

// console.log(customFilterUnique(array,el => el));
/// -----------------------------------

// const arr = [
//   {id: 1, name: 'test'},
//   {id: 2, name: 'foo'},
//   {id: 3, boo: 3},
//   {id: 2, isAdmin: false}
// ]

// console.log(customFilterUnique(arr, (el) => el.id));
// -----------------------------------
