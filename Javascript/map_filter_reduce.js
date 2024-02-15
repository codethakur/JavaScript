const users=[
    {firstName: "Kishan", lastName: "Thakur", age: 26},
    {firstName: "curran", lastName: "Grower", age: 30},
    {firstName: "Krish", lastName: "kumar", age: 45},
    {firstName: "Josephine", lastName:"Langford", age:26},
]

const MapOutput = users.map((x)=>x.firstName+" "+x.lastName);
console.log(MapOutput);

const ReduceOutput = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(ReduceOutput);


const FilteeOutput = users.filter((x)=>x.age<30).map((x)=>x.firstName+" "+x.lastName);
console.log(FilteeOutput);


const ReduceOutput2 = users.reduce((result, user) => {
    if (user.age < 30) {
        result.push(user.firstName + " " + user.lastName);
    }
    return result;
}, []);

console.log(ReduceOutput2);
