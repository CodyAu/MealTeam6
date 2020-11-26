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