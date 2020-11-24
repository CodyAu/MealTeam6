var myRestList = document.getElementsByClassName("rlist");
var myMarkers = document.getElementsByClassName("marker");


let currentStore = null; // openMenuPage(currentStore); to open the store page

var i;
var n;
for (i = 0; i < myRestList.length; i++) {
    myRestList[i].onmouseover = function restShow() {
        for (n = 0; n < myRestList.length; n++){
            myRestList[n].classList.remove('rclicked');
            myMarkers[n].classList.remove('mclicked');
        }
        var li = this;
        li.classList.toggle('rclicked');
        myMarkers[li.id].classList.toggle('mclicked');

        currentStore = restList[mark.id]; // set current store

    }
}

var m;
var k;
for (m = 0; m < myMarkers.length; m++) {
    myMarkers[m].onmouseover = function markerShow() {
        for (k = 0; k < myMarkers.length; k++){
            myRestList[k].classList.remove('rclicked');
            myMarkers[k].classList.remove('mclicked');
        }
        var mark = this;
        mark.classList.toggle('mclicked');
        myRestList[mark.id].classList.toggle('rclicked');
    }
}

var a;
for (a = 0; a < myMarkers.length; a++) {
    myMarkers[a].onclick = function markerSel() {
        var mark = this;
        currentStore = restList[mark.id]; // set current store
        openMenuPage(currentStore);
    }
}

var b;
for (b = 0; b < myMarkers.length; b++) {
    myRestList[b].onclick = function markerSel() {
        var li = this;
        currentStore = restList[li.id]; // set current store
        openMenuPage(currentStore);
    }
}