let checkout = new Map(); // checkout map object, maps store object to an array of checkout item objects selected from that store

//Allow home button to bring you to the home page
var homeButton = document.getElementById("home_b");
homeButton.addEventListener('click', function (hp) {
    setPage("home_page");
});

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
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        if (!ev.target.classList.contains('checkoutBtn') && ev.target.classList.contains('order')) {
            ev.target.classList.toggle('checked');
        }
    }
}, false);

// Adds the given item to the cart
function addToCart(store, item) {
    if (!checkout.has(store)) {
        checkout.set(store, []);
    }

    checkout.get(store).push(item);

    var li = document.createElement("li");
    li.className = "order";
    var t = document.createTextNode(`${item.getItemName()} - ${store.getName()}`);
    li.appendChild(t);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    // setup close text
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // setup close click listener
    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }

    $(li).insertBefore(".checkoutBtn");
}

// Show list items along a circle
var main = document.getElementById('ring');
var circleArray = [];
var setup = function () {
    setPage("restListPage");
    // checkout listener
    $(".checkoutBtn").click(function () {
        setPage("checkoutPage");
    });

    // click listener for menu page back button
    $("#menuCategoriesGoBack").click(function () {
        setPage("restListPage");
    });

    for (var i = 0; i < 10; i++) {
        //create element, add it to the array, and assign it's coordinates trigonometrically.
        //Then add it to the "main" div
        var circle = document.createElement('div');
        circle.className = 'oval';
        switch (i) {
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
                circle.innerHTML = "Japanese";
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

        circleArray[i].posx = 450 + Math.round(((350 * Math.cos((i * (2 * Math.PI / 10)) - (Math.PI / 10))))) + 'px';
        circleArray[i].posy = 350 + Math.round((200 * Math.sin((i * (2 * Math.PI / 10)) - (Math.PI / 10)))) + 'px';

        circleArray[i].style.position = "fixed";
        circleArray[i].style.top = circleArray[i].posy;
        circleArray[i].style.left = circleArray[i].posx;

        main.appendChild(circleArray[i]);

    }
};

setup();

// sets the page to the given page
function setPage(page) {
    // close all pages
    $(".template-page").hide();
    // open correct page
    $("#" + page).show();
}


// Opens the menu page for the given store
function openMenuPage(store) {
    let storeKeep = store;
    clearMenuPage(); // close any other page

    // for each store page
    for (page of store.getPages()) {
        let category = page.getCat();
        let section = document.createElement("section"); // create the html object menu-categories-item objects
        let sectionPage = page; // used for onclick functions

        section.innerHTML = `<h1>${category}</h1>`;
        section.className = "menu-categories-item";

        $(section).click(function () {
            $(".menu-category-item").remove(); // remove all other menu-category-items

            for (item of sectionPage.getItems()) {
                // make new menu-category-items
                let menuCategoryItem = document.createElement("div");
                let keepItem = item; // used for click function
                menuCategoryItem.className = "menu-category-item";
                menuCategoryItem.innerHTML = createHTMLForItem(item);
                $(".menu-category-flex").append(menuCategoryItem);

                // set category name
                $("#menuCategoryH1").html(category);

                // set add to cart listener
                $(`#add${item.getItemName().replace(/\s+/g, '')}ToCart`).click(function () {
                    console.log(`adding ${keepItem.getItemName()} to cart!`);
                    addToCart(store, keepItem);
                });
            }
        });

        $(".menu-categories").append(section);
    }

    setPage("menuPage"); // open the page
}

let lastLeft = Math.random() < 0.5;

function createHTMLForItem(item) {
    let returnHTML;
    let image = ``;
    let information = ``;
    let options = ``;

    information = `<div><section class='information_header'><h1>${item.getItemName()}</h1><span>Price - \$${item.getPrice()}</span></section><section class="information_desc"><h2>${item.getDesc()}</h2><i id="add${item.getItemName().replace(/\s+/g, '')}ToCart" class="fa fa-play fa-3x"></i></section><section> </section></div>`;
    image = `<img src="${item.getImg()}" alt="${item.getItemName()} Food Image">`

    // check for options


    if (!lastLeft) {
        // image goes on left
        returnHTML = information + image
        lastLeft = true;
    } else {
        // image goes on right
        returnHTML = image + information;
        lastLeft = false;
    }

    return returnHTML;
}

function clearMenuPage() {
    // clear menu-categorie-item objects
    $(".menu-categories-item").remove();
    $(".menu-category-item").remove();
    $("#menuCategoryH1").html('Please Select a Category');
}


// lazy dev function
function _print_pages() {
    console.log("home_page");
    console.log("restListPage");
    console.log("menuPage");
}