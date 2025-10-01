const { resolve } = require("path");

function asynFunc1()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000)
    })
}
function asynFunc2()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000)
    })
}
console.log("fetching data1...");
let p1 = asynFunc1();
p1.then((res)=>{
    console.log("fetching data2...");
    let p2 = asynFunc2();
    p2.then((res)=>{
        console.log("program successfully conducted.....")
    })
})