document.addEventListener("DOMContentLoaded", function () {
    function attachedEventListener() {
        let count = 0;
        document.getElementById("clickMe").addEventListener("click", function xyz() {
            console.log("Button clicked", ++count);
        });
    }

    attachedEventListener();
});
