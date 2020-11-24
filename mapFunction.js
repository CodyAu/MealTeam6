var myRestList = document.getElementsByClassName("rlist");
var myMarkers = document.getElementsByClassName("marker");


let currentStore = null; // openMenuPage(currentStore); to open the store page

var i;
var n;
for (i = 0; i < myRestList.length; i++) {
    myRestList[i].onclick = function restSelect() {
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
    myMarkers[m].onclick = function markerSel() {
        for (k = 0; k < myMarkers.length; k++){
            myRestList[k].classList.remove('rclicked');
            myMarkers[k].classList.remove('mclicked');
        }
        var mark = this;
        mark.classList.toggle('mclicked');
        myRestList[mark.id].classList.toggle('rclicked');


        currentStore = restList[mark.id]; // set current store
        openMenuPage(currentStore);
    }
}