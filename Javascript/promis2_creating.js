const cart = ["laptop", "pen", "notebook"];
const promise = createOrder(cart);//e.g.: creating API

promise.then(function(orderId){
    console.log(orderId)
    // proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
})

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

function vallidateCart(cart){
    return false;
}