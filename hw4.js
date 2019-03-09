// Kyle Leadbetter
// COSC 2030
// HW4

function permutationSort(arr)
{
    var counter = 0;
    console.log("Sorting:" + arr)
    var triedArr = [];
    while(!isSorted(arr))
    {
        counter++;
        arr = suffle(arr);
        triedArr.push(arr.slice() );
    }
    var contains = triedArr.includes(arr);
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

function suffle(arr, tries)
{
    //var going = true;
    //while(going)
    //{
        var newArr = arr.slice();
        var j;
        for (var i = newArr.length; i > 0; i--)
        {
            j = Math.floor((Math.random()*i));
            arr[i-1] = newArr[j];       
            newArr.splice(j,1);
        }
        //if(!tried.includes(arr.split()) )
        //{going = false;}
    //}
    return arr;
}
//var testArr = [1,2,3,5,4,7,6,8,10,9]
var testArr = [5,2,4,3,1];

//console.log(  testArr + testArr.includes(t1.slice() )   )  
permutationSort(testArr)
   
