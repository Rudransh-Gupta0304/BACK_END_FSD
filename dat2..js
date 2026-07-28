//  synchronous and async.
// console.log("task1");

// function hello(){
//     console.log("task3");
// }

// hello();
//     console.log("task2");


// function hello(){
//     console.log("task1");
//     setTimeout(function(){
//         console.log("task2");
//     } , 2000);
// }
// hello();
// console.log("task3");

function hello(n1 , n2 , cb){
    console.log
}


//synchronous and asynchronous(all tasks are executed together in synchronous- disadvantage server can hang when there is huge data)
//synchronous: blocking js and asynchronous: non-blocking js 
//use node filename for node.js

console.log("task 3");

function hello(){
    console.log("task 1");
}
hello();
console.log("task 2");

//asynchronous-
//callback functions- passing functions as arguments

function hello(){
    console.log("task 1");
    setTimeout(function(){       //delays task waiting time
        console.log("task 2");
        console.log("task 4");
    },2000)
}
hello();
console.log("task 3");


//callback-

function hello(n1,n2, callback){ //cb
    console.log("task 1");
    return n1+n2;
    
}

console.log(hello(5,10));

let a=10;
let b=20;
console.log(hello(a,b));
hello(a,b,demo());

function hi(){
    console.log("say hi!");
}


function demo(){
    console.log("demo");
}


function dispaly(){
    console.log("Learning FSD");
}
function fsd(callback){
    console.log("Welcome");
}
fsd(display());