function mergeSort(array){
    if (array.length == 0){
        return [];
    }
    let low = 0;
    let high = array.length;
    if (array.length == 1){
        // console.log(array);
        return array;
    } else {
        // console.log(array);
        let mid = (low + high) / 2;
        mid = Math.round(mid);
        let leftHalf = array.slice(0,mid);
        let rightHalf = array.slice(mid, array.length)
        leftHalf = mergeSort(leftHalf);
        // console.log(leftHalf);
        rightHalf = mergeSort(rightHalf);
        // console.log(rightHalf);
        let mergedArray = [];
        let i = 0;
        let n = 0;
        while (leftHalf[i] != undefined && rightHalf[n] != undefined){
          if (leftHalf[i] <= rightHalf[n]){
                mergedArray.push(leftHalf[i]);
                // console.log(leftHalf);
                // console.log(mergedArray);
                i++;
               
            } 

            if (rightHalf[n] <= leftHalf[i]){
                mergedArray.push(rightHalf[n]);
                // console.log(rightHalf);
                // console.log(mergedArray);
                n++;
                
                
            }



         
            if (leftHalf[i] == undefined){
                mergedArray.push(rightHalf[n]);
                continue;
            }     
        
            if (rightHalf[n] == undefined){
                mergedArray.push(leftHalf[i]);
                continue;
            }          
        }
        // for (let i = 0; i <= leftHalf.length ; i++){
            

        //    

        //     if (rightHalf[i] == undefined){
        //         mergedArray.push(...leftHalf)
        //    }

        // }


        // console.log(mergedArray);
        return mergedArray;

    }

};

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));



// mergeSort() → [1, 2, 3, 4, 5]
// mergeSort() → [0, 1, 1, 2, 3, 5, 8, 13]
// mergeSort() → [79, 100, 105, 110]