const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P1 sucess"),3000);
    // setTimeout(()=>reject("P1 fail"),3000);
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P2 sucess"),1000);
    // setTimeout(()=>reject("P2 fail"),1000);
});

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P3 sucess"),2000);
    // setTimeout(()=>reject("P3 fail"),2000);
});


Promise.any([p1, p2, p3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
    console.log(err.errors);
});

//Rejection: If all promises are rejected, 
//it rejects with an AggregateError containing all the rejection reasons.
