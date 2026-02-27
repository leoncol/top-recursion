/* Using iteration, write a function fibs which takes a number 
and returns an array containing that 
many numbers from the Fibonacci sequence. 
Using an example input of 8, 
this function should return the array 
[0, 1, 1, 2, 3, 5, 8, 13]. */

// function fibs(number, array = []){
//  if (number < 2){
//     array.push(number);
//     return array;
//  } else {
//     return (fibs(number-1)+fibs(number-2))
//  }
// }

function fibs(number){
    let newArray = [];
    for(let i = 0; i< number; i++){
        if (i == 0){
            newArray.push(0);
            
        } else if (i == 1){
            newArray.push(1);
        }else {
            newArray.push(newArray[i-2]+newArray[i-1]);
        }

    }
    return newArray;
}

console.log(`from normal loop:`+ fibs(8));



function fibsRec(number, newArray = []){
    if (number == 1){
        newArray.push(0);
        // console.log(newArray);
        return newArray;
    } else if (number == 2){
        newArray = fibsRec(number-1);
        newArray.push(1);
        // console.log(newArray);
        return newArray;
    }else if (number > 2){
        newArray = fibsRec(number-1);
        let newValue = newArray[newArray.length-1]+newArray[newArray.length-2];
        newArray.push(newValue);
        // console.log(newValue);
        // console.log(newArray);
        return newArray;        
    } else {
        return 'Invalid number!'
    }
}

console.log(`from recursion:` + fibsRec(8));