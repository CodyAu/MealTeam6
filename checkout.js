var options = document.getElementsByClassName("methodChoice");
var i;
var n;
for (i = 0; i < options.length; i++) {
    options[i].onclick = function delOpt() {
        for (n = 0; n < options.length; n++){
            options[n].classList.remove('methodChoiceSelected');
        }
        var li = this;
        li.classList.toggle('methodChoiceSelected');
    }
}

var clock = document.getElementById("readyTime");
options[0].onclick = function setDel(){
    var d = new Date();
    d.setMinutes(d.getMinutes() +40);
    clock.innerHTML = "Delivery around " + d.getHours() + ":" + d.getMinutes();
}
options[1].onclick = function setPickup() {
    var d = new Date();
    d.setMinutes(d.getMinutes() +20);
    clock.innerHTML = "Order ready by " + d.getHours().toString() + ":" + d.getMinutes().toString();
}

// Draws the checkout given a map of stores -> items
function drawCheckout(map) {
    let totalPrice = 0;

    $(".menu-category-item").remove();
    for (key of map.keys()) {
        for (item of map.get(key)) {
            // draw each item
            let menuCategoryItem = document.createElement("div");
            menuCategoryItem.className = "menu-category-item";
            menuCategoryItem.innerHTML = createHTMLForItem(item);
            $(".orderView").append(menuCategoryItem);

            totalPrice += item.getPrice();
        }
    }

    // set free shipping
    if (totalPrice > 20.0) {
        $("#freeShipping").show();
    } else {
        $("#freeShipping").hide();
    }

    // set price
    $("#checkoutPrice").text(`$${totalPrice.toFixed(2)}`);
    $("#checkoutPriceTax").text(`$${(totalPrice * 0.13).toFixed(2)}`);
    $("#checkoutPriceTotal").text(`$${(totalPrice * 1.13).toFixed(2)}`);
}