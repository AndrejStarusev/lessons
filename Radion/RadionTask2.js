//-------------------------TASK 2 -----------------//
const prompt = require('prompt-sync')();
const arr = Array(10000).fill(null).map(() => Math.floor(Math.random() * 2000) - 1000);


function sortTime () {
    let timeInsertionSort;
    let timeBubbleSort;
    let timeSelectionSort;
    const startData = Date.now();
        startData;
        insertionSort(arr);
        timeInsertionSort = Date.now() - startData;
        startData
        selectionSort(arr);
        timeSelectionSort = Date.now() - startData;
        startData
        bubbleSort(arr);
        timeBubbleSort = Date.now() - startData;

        console.log(`time insertion : ${timeInsertionSort}`)
        console.log(`time bubblesort : ${timeBubbleSort}`);
        console.log(`time SelectionSort: ${timeSelectionSort}`);

    }

sortTime();


//---------------------------------------------- insertionSort ----------------------------



function insertionSort(arr,sortOrder) {
    for (i = 1; i < arr.length; i++) {
        let j = i ;
        while(j !=0 && sortOrder === 'ASC' ? arr[j] < arr[j - 1]: arr[j] > arr[j - 1]){
            let tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = tmp;
            j--;
        }
    }
    return arr;
}

// console.log(insertionSort(arr,sortOrder))





// ----------------------BubbleSort--------------------------


function bubbleSort(array,order) {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++) {
            const moreOrLess = order === 'ASC' ? array[j+1] < array[j]: array[j+1] > array[j];
            if (moreOrLess){
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
        }
    }
    return array
}






//--------------------------------------SelectionSort-----------------------





function selectionSort(arr,order){
    for(let j = 0; j < arr.length; j++){
        let max = order === 'ASC' ? -Infinity : Infinity;
        let index = null;
        
        for(let i = 0; i < arr.length - j; i++){
            const moreOrLess = order === 'ASC' ? arr[i] > max: arr[i] < max;
            if(moreOrLess) {
                max = arr[i];
                index = i;
            }
        }
        let tmp = arr[arr.length - 1 - j];
        arr[arr.length - 1 - j] = max;
        arr[index] = tmp;


    }

    return arr
}





//-------------------------function test-----------------------

// create function that tests method
function test(functionToTest) {
    const arrAsc = [...arr.sort((a, b) => a - b)];
    const arrDesc = [...arr.reverse()] 
    const ascRes = [...functionToTest(arr, 'ASC')]
    const descRes = [...functionToTest(arr, 'DESC')]
    if (arrAsc.length !== ascRes.length) return false; 
    for(let i = 0; i < arrAsc.length; i++){
        if (arrAsc[i] !== ascRes[i]) return false;       
    }
    for(let i = 0; i < arrAsc.length; i++){
        if (arrDesc[i] !== descRes[i]) return false;       
    }
    return true    
}
console.log("selctionSort",test(selectionSort));
console.log("bubbleSort",test(bubbleSort));
console.log("insertionSort",test(insertionSort));
  
  

  