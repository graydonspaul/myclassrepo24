// alert("Hello World"); 

var hello = "hello"; 
console.log("This is good for debugging" + hello); 


function print3ways() { 
    alert("Pop up window!"); 
    console.log("Prints to the developer console"); 
    document.write("This will override the entire html document"); 

}

var arr = [1,2,3,4,5]; 

function getSum() { 
    s=0; 
    for(let i=0;i<a.length;i++) {
        s+= a[i];
    }
    return s;
}

function findMin() {
    m=a[0];
    for(let i=1;i<a.length;i++) {
        if (a[i] < m){
            m=a[i];
        }
    }
    return m;
}

function findMax() { 
    m=a[0];
    for(let i=1;i<a.length;i++) {
        if (a[i] > m){
            m=a[i];
        }
    }
    return m;
}

function average() { 
    let sum = getSum(); 
    return sum / arr.length; 
}

function funWithArrays() { 
    document.write("Sum: " + getSum()); 
    document.write("<br>Min: " + findMin()); 
    document.write("<br>Max: " + findMax()); 
    document.write("<br>Average: " + average()); 

}


// this function should use document.write to
// print the sum, the min, the max and the average of the array,
// arr. Create separate functions to calculate and return each
// value – getSum(), findMin(), findMax(), average().
// document.write does not print a new line at the end of
// printing. To print on a new line, use the <br> HTML element