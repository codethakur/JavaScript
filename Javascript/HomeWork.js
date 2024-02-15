const dummyData = ["MacBook", "Pen", "iPad"];

// Dummy function to simulate creating an order
function createOrder(cart) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation
        setTimeout(() => {
            const orderId = Math.floor(Math.random() * 1000);
            resolve(orderId);
        }, 1000);
    });
}

// Dummy function to simulate proceeding to payment
function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation
        setTimeout(() => {
            const paymentInfo = { orderId, amount: 1500 };
            resolve(paymentInfo);
        }, 1000);
    });
}

// Dummy function to simulate showing order summary
function showOrderSummary(paymentInfo) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation
        setTimeout(() => {
            console.log("Order Summary:", paymentInfo);
            resolve(paymentInfo);
        }, 1000);
    });
}

// Dummy function to simulate updating the wallet
function updateWallet(paymentInfo) {
    return new Promise((resolve, reject) => {
        // Simulating an error
        const isError = Math.random() < 0.5;

        setTimeout(() => {
            if (!isError) {
                console.log("Wallet Updated");
                resolve(paymentInfo);
            } else {
                reject("Error updating wallet");
            }
        }, 1000);
    });
}

// Creating the promise chain
createOrder(dummyData)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateWallet(paymentInfo))
    .then(() => {
        console.log("All operations completed successfully");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
