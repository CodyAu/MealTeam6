var myRestList = document.getElementsByClassName("rlist");
var i;
var n;
for (i = 0; i < myRestList.length; i++) {
    myRestList[i].onclick = function() {
        for (n = 0; n < myRestList.length; n++){
            myRestList[n].classList.remove('rclicked');
        }
        var li = this;
        li.classList.toggle('rclicked');
    }
}