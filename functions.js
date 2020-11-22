// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("order");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    if(!ev.target.classList.contains('checkoutBtn') && ev.target.classList.contains('order')){
      ev.target.classList.toggle('checked');
    }
  }
}, false);

// Create a new list item when clicking on the "Add" button
// adding items to cart not implemented yet
function newElement() {
  var li = document.createElement("li.order");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Show list items along a circle
var main = document.getElementById('ring');
var circleArray = [];
var setup = function() {
  for(var i = 0; i<10; i++) {
      //create element, add it to the array, and assign it's coordinates trigonometrically.
      //Then add it to the "main" div
    var circle = document.createElement('div'); 
    circle.className = 'oval number'+i;
    switch(i){
      case 0:
        circle.innerHTML = "Italian";
        break;
      case 1:
        circle.innerHTML = "Chinese";
        break;
      case 2:
        circle.innerHTML = "Greek";
        break;
      case 3:
        circle.innerHTML = "Korean";
        break;
      case 4:
        circle.innerHTML = "Japenese";
        break;
      case 5:
        circle.innerHTML = "Mexican";
        break;
      case 6:
        circle.innerHTML = "Fryworks";
        break;
      case 7:
        circle.innerHTML = "Grillworks";
        break;
      case 8:
        circle.innerHTML = "Indian";
        break;
      case 9:
        circle.innerHTML = "French";
        break;
    }
      
    circleArray.push(circle);
      
    circleArray[i].posx = 450+ Math.round(((350*Math.cos((i*(2*Math.PI/10))-(Math.PI/10))))) +'px';
    circleArray[i].posy = 350+ Math.round((200*Math.sin((i*(2*Math.PI/10))-(Math.PI/10)))) + 'px';
    
    circleArray[i].style.position = "fixed";
    circleArray[i].style.top = circleArray[i].posy;
    circleArray[i].style.left = circleArray[i].posx;
      
    main.appendChild(circleArray[i]);
    
  } 
};

setup();