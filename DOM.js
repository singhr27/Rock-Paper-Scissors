function myArrMap(array, customFunc){
    arr=[]
    for(let i=0; i<array.length; i++){
        arr.push(customFunc(array[i]));
    }
    return arr;
}


a = [1,2,3,4]

b = myArrMap(a, console.log);
console.log(b);