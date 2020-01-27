'use strict'
//given an array of binary number. Return the minimun amount of jumps are necessary in order to get to the end of the array
//

function jumpingOnClouds(arr){
  let count = 0;

  for (let i = 0; i < arr.length -1; i++){
    if(arr[i+2] === 0) i++
    count++
  }
  return count
}

jumpingOnClouds([0,1,0,1,0])