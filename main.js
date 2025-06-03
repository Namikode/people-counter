let total = document.getElementById("total-people");
let adultResult = document.getElementById("adult-result");
let childResult = document.getElementById("child-result");
let adultsCount = 0;
let childrenCount = 0;

function countAdult() {
    adultsCount++;
    adultResult.textContent = "Adults: " + adultsCount;
    calculateTotal();
}

function countChild() {
    childrenCount++;
    childResult.textContent = "Children: " + childrenCount;
    calculateTotal();
}

function calculateTotal() {
    let totalCount = adultsCount + childrenCount;    
    total.textContent = "Total: " + totalCount;
}

function clearAll() {
    total.textContent = "Total: " + 0;
    adultResult.textContent = "Adults: " + 0;
    childResult.textContent = "Children: " + 0;
    adultsCount = 0;
    childrenCount = 0;
}
