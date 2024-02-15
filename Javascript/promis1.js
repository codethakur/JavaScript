
const cart = ["laptop", "pen", "notebook"];

createOrder(cart, function (orderId) {
    proceedToPayment(orderId);
});

//OR                //calling

const Promise = ctreaOrder(cart);

Promise.then(function(orderId){
    proceedToPayment(orderId);
}) // are Same              //attaching

//------------------------------
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentinfo){
    return showOrderSummary(paymentinfo);       //not depends 
})
.then(function(paymentinfo){
    return updateWallet(paymentinfo);
})

// OR


createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateWallet(paymentInfo))
    
