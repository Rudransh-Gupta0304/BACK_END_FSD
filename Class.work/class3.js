//  promises for synchronous 
// js is single threaded language

// const promiseOne = new Promise((resolve , reject) => {
//     console.log("Promise task1");

     // resolve("Promise passed by using resolve");

//     let msg = true;
//     if(!msg== true){
//         console.log("message using promise failed")
//     }else{
//         console.log("error.............");
//     }

     // setTimeout(() =>{
     //     console.log(resolve());
     // } , 2000)


// }).then((result) => {
//     console.log(result);
// })//.catch((error) =>{
 // console.log(error);
 // });


//  async
// console.log("1")
// async function test(){
//     console.log("2");
//     await console.log("3");
//     console.log("4");
//     console.log("5");
// }

// test()
// console.log("6");



//  create promise that will print username and password using resolve and 
// if password and username not found then it will call reject state and print error


// const promiseUser = new Promise((resolve , reject) => {

//     setTimeout(function(){
//         console.log("This is user Data");
        
//         let err = false ;
//         if(!err){
//             resolve("user : ABC , password : 1233");
//         }else{
//             reject("ERROR... data fail");
//         }
//     } , 2000)

// }).then((result) => {
//     console.log(result)

// }).catch((error) => {
//     console.log(error)
// });

async function test(){
    console.log("message:1");
    const response = await fetch("./student.json");
    console.log(response.status)
    const student = await response.json();
    return student;
    console.log("message : 3");
}
test().then((res) =>{
     console.log(res);
})
console.log("message : 4")