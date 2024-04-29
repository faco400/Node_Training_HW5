function customFilterUnique(array, callback) {
  const uniqueElements = [];
  const uniqueMap = new Map();

  array.forEach(element => {
    const key = callback(element);
    if(!uniqueMap.has(key) && !(key === null) ){
      uniqueMap.set(key, true);
      uniqueElements.push(element);
    }

  });

  return uniqueElements;
}

// -----------------------------------
// const array = [1, '1', '2', 3, '5'];

// function isUniqueString (string) {
//   if (typeof(string) === 'string') {
//     return string;
//   } else {
//     return null
//   }
// }

// console.log(customFilterUnique(array,isUniqueString));
/// -----------------------------------

const persons = [
  {name: 'Vini', age: 24},
  {name: 'Vini', age: 30},
  {name: 'Sarah', age: 30},
  {name: 'Ben', age: 10},
  {name: 'Sarah', age: 17},
  {name: 'Robin', age: 14},
  {name: 'Vini', age: 10},
]

function isUniqueName(obj) {
  return obj.name;
}

console.log(customFilterUnique(persons,isUniqueName));
// -----------------------------------