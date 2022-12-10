const prompt = require("prompt-sync")();


function bublSort(new_str, wich_sort) {

    for (let i = 1; i < new_str.length; i++) {
        for (let o = 0; o < new_str.length; o++) {

            if (new_str[o] > new_str[o + 1] && wich_sort === 'ASC') {
                
                let str = new_str[o];
                new_str[o] = new_str[o + 1];
                new_str[o + 1] = str;
            }

            if (new_str[o] < new_str[o + 1] && wich_sort === 'DESC') {
                
                let str = new_str[o];
                new_str[o] = new_str[o + 1];
                new_str[o + 1] = str;
            }
        }
    }
    
    let copy = [];

    new_str.forEach((item, index) => {
        copy[index] = item;
 
    })
    return copy;
    
}


function quickSort(arr, wich_sort) {
    if (arr.length < 2) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {

        if (wich_sort === 'ASC') {
            (pivot > arr[i]) ? left.push(arr[i]) : right.push(arr[i]); 
        }
        else {
            (pivot < arr[i]) ? left.push(arr[i]) : right.push(arr[i]); 
        }
    }
        return quickSort(left, wich_sort).concat(pivot, quickSort(right, wich_sort));
}



    // create function that tests method
    function test(sortt) {
        const arr1 = [1, 3, 2];
        const arrAsc = [1, 2, 3];
        const arrDesc = [3, 2, 1];

        const ascRes = sortt(arr1, 'ASC');
        const descRes = sortt(arr1, 'DESC');

        return (String(arrAsc) == String(ascRes)) && (String(arrDesc) == String(descRes)) ? true : false;
    }


   if(test(bublSort)) {
       console.log('Your sort is working');
   }



  