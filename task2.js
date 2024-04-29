function chunkArray(array,chunkSize) {
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

const array = [1,2,3,4];

console.log(chunkArray(array,2))