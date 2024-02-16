const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P1 sucess"),10000);
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P2 sucess"),5000);
});

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P2 sucess"),15000);
});

async function HandlePromis(){
    console.log("Hello World");

    const val1 = await p1;
    console.log("Namaste Programmer!");
    console.log(val1);


    const val2 = await p2;
    console.log("Namasete Programmer2");
    console.log(val2);

    const val3 = await p3;
    console.log("Namasete Programmer3");
    console.log(val3);

}

HandlePromis();

