const cart = ["laptop", "pen", "notebook"];
const promise = createOrder(cart)
.then(function(orderId){
    console.log(orderId)
})
.then(function(){
    proceedToPayment(orderId);
})
.then(function(){
    console.log(paymentinfo)
})
.catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
    console.log("Has nothing to do with Error, It will run ");
});

function createOrder(cart)
{
    const pr = new Promise(function(resolve, reject){
        if(!vallidateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "121223";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    })
    return pr;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Successful");
    })
}
function vallidateCart(cart){
    return true;
}