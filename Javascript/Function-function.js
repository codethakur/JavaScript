const radius = [3, 1, 2, 4]

const area = function(radius){
    return Math.PI*radius*radius;
};

const circumference = function(radius){
    return 2*Math.PI*radius;
};

const diameter = function(radius){
    return 2*radius;
};

// const Calucate = function(radius,logic){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// };

Array.prototype.Calculate = function(logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

console.log(radius.map(area));//same->
console.log(radius.Calculate(area));



// console.log(Calucate(radius, area));
// console.log(Calucate(radius,circumference));
// console.log(Calucate(radius,diameter));