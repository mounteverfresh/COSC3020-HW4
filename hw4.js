// Kyle Leadbetter
// COSC 2030
// HW4

function permutationSort(arr)
{
    var counter = 0;
    console.log("Sorting:" + arr)
    while(!isSorted(arr))
    {
        counter++;
        arr = newPermutation(arr);
    }
    console.log("Array sorted in " + counter
    + " permutations.\n" + arr)
}



function isSorted(arr)
{
    for(var i = 1; i < arr.length; i++)
    {
        if (arr[i] < arr[i-1])
        {
            return false;
        }
    }
    return true;
}

function newPermutation(arr)
{
    var newArr = arr;
    var j;
    for (var i = newArr.length; i > 0; i--)
    {
        j = Math.floor((Math.random()*i));
        arr[i-1] = newArr[j];       
        newArr.splice(j,1);
    }
    return arr;
}
var testArr = [1,2,3,5,4,7,6,8,10,9]
//permutationSort([1,2,3,5,4,7,6,8,10,9])
console.log(testArr)
console.log(newPermutation(testArr))