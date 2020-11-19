// Creating store objects
class store {
    constructor(loc, name, food) {
        this.location = loc;
        this.name = name;
        this.type = food;
        this.menuPages = [];
    }
    addPage(page) {
        this.menuPages.push(page);
    }
    getLoc() {
        return this.location;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getPages() {
        return this.menuPages;
    }
    getNumPages() {
        return this.menuPages.length;
    }
};

// object holding details for a specific menu page
class storePage {
    constructor(cat) {
        this.category = cat;
        this.items = [];
    }
    addItem(thing) {
        this.items.push(thing);
    }
    getItems() {
        return this.items;
    }
    getNumItems() {
        return this.items.length;
    }
    getCat() {
        return this.category;
    }
};

// the toptions are for the windows in the item specifics screen
class storeItem {
    constructor(itemName, imgPath, description, num1, num2, value) {
        this.name = itemName;
        this.source = imgPath;
        this.desc = description;
        this.option1 = num1;
        this.option2 = num2;
        this.price = value;
    }
    getItemName() {
        return this.name;
    }
    getImg() {
        return this.source;
    }
    getDesc() {
        return this.desc;
    }
    getOp1() {
        return this.option1;
    }
    getOp2() {
        return this.option2;
    }
    getPrice() {
        return this.price;
    }
};

// creating menu items
// option values effect on the item selection screen is not yet established
// 0 - could be for 'single/double'
// 1 - 'extra cheese', 'add bacon'
// 2 - small/medium/large
// 3 - single/double/triple order
// 4 - nothing
// 5 - pork/beef/shrimp dumplings
const hotDog1 = new storeItem('Hot Dog',
    'dog1.jpeg',
    'A footlong all beef hot dog on a sesame seed bun.'
    , 0, 1, 3.00);
const hotDog2 = new storeItem('Bacon Cheese Dog',
    'dog2.jpeg',
    'Crispy bacon and cheddar cheese on our signature hot dog.',
    0, 1, 4.50);
const hotDog3 = new storeItem('Chilidog',
    'dog3.jpeg',
    'Homemade hearty chili on our signature hot dog.',
    0, 1, 4.50);
const dogs = new storePage('Dogs');
dogs.addItem(hotDog1);
dogs.addItem(hotDog2);
dogs.addItem(hotDog3);

const burger1 = new storeItem('Hamburger',
    'burg1.jpeg',
    'Hearty beef patty on a brioche bun.',
    0, 1, 4.00);
const burger2 = new storeItem('Bacon Cheeseburger',
    'burg2.jpeg',
    'Savory maple bacon with jack cheese on our beef patty.',
    0, 1, 5.00);
const burger3 = new storeItem('Sloppy Joe',
    'burg3.jpeg',
    'Homestyle pork chili on a toasted bun.',
    0, 1, 4.00);
const burgs = new storePage('Burgers');
burgs.addItem(burger1);
burgs.addItem(burger2);
burgs.addItem(burger3);

const side1 = new storeItem('Fries',
    'side1.jpeg',
    'Cripsy home cut potatoes.',
    2, 3, 1.50);
const side2 = new storeItem('Onion Rings',
    'side2.jpeg',
    'Cripsy breaded onion rings.',
    2, 3, 1.50);
const side3 = new storeItem('Salad',
    'side3.jpeg',
    'Fresh greens and crunchy crutons topped with a light vinegrette.',
    2, 3, 1.50);
const sides = new storePage('Sides');
sides.addItem(side1);
sides.addItem(side2);
sides.addItem(side3);

const grillworks = new store('North end', "Gary's Grill", 'Grillworks');
grillworks.addPage(dogs);
grillworks.addPage(burgs);
grillworks.addPage(sides);

//===========================================
const fish1 = new storeItem("Halibut",
    'fish1.jpeg',
    'Crispy breaded halibut.',
    2, 4, 5.00);
const fish2 = new storeItem("Pickerel",
    'fish2.jpeg',
    'Crispy breaded pickerel.',
    2, 4, 4.00);
const fish3 = new storeItem("Cod",
    'fish3.jpeg',
    'Crispy breaded cod.',
    2, 4, 4.50);
const fishNchips = new storePage("Fish'n chips");
fishNchips.addItem(fish1);
fishNchips.addItem(fish2);
fishNchips.addItem(fish3);

const chkn1 = new storeItem('Chicken nuggets',
    'chkn1.jpeg',
    'Savory breaded chicken nuggets.',
    2, 4, 3.00);
const chkn2 = new storePage('Chicken fingers',
    'chkn2.jpeg',
    'Crispy breaded chicken tenders.',
    2, 4, 4.00);
const chkn3 = new storePage('Fried chicken',
    'chkn3.jpeg',
    'Hearty crispy breaded chicken.',
    2, 4, 5.00);
const chicken = new storePage('Chicken');
chicken.addItem(chkn1);
chicken.addItem(chkn2);
chicken.addItem(chkn3);
const fryworks = new store("East side", "Fryer Tuck's", 'Fryworks');
fryworks.addPage(fishNchips);
fryworks.addPage(chicken);
fryworks.addPage(sides);

//===============================================
const wrap1 = new storeItem('Chicken Taquitos',
    'wrap1.jpeg',
    'Spicy chicken with diced red pepper and gaucamole inside a toasted flour tortilla.',
    2, 0, 4.00);
const wrap2 = new storeItem('Beef Quesadilla',
    'wrap2.jpeg',
    'Savory seasoned ground beef with sauteed onions in a whole wheat tortilla.',
    2, 0, 5.00);
const wrap3 = new storeItem('Pork Enchiladas',
    'wrap3.jpeg',
    'Marinated pork with red pepper blend in a corn tortilla.',
    2, 0, 4.50);
const wraps = new storePage('Wraps');
wraps.addItem(wrap1);
wraps.addItem(wrap2);
wraps.addItem(wrap3);

const taco1 = new storeItem('Spicy tacos',
    'taco1.jpeg',
    'Ground beef mixed with our homemade spicy seasoning mix in a flour taco.',
    2, 3, 5.00);
const taco2 = new storeItem('Beef tacos',
    'taco2.jpeg',
    'Ground beef with diced red peppers and guac in a whole wheat taco.',
    2, 3, 5.00);
const taco3 = new storeItem('Savory chicken taco',
    'taco3.jpeg',
    'Shredded seasoned chicken with diced fried onions.',
    2, 0, 4.00);
const tacos = new storePage('Tacos');
tacos.addItem(taco1);
tacos.addItem(taco2);
tacos.addItem(taco3);

const msnack1 = new storeItem('Classic churros',
    'msnack1.jpeg',
    'Deep fried dough rolled in cinnamon sugar and served with chocolate sauce.',
    2, 3, 2.00);
const msnack2 = new storeItem('Corn cake',
    'msnack2.jpeg',
    'Sweet and moist, made with sweet corn, cornmeal, and corn flour.',
    2, 3, 3.00);
const msnack3 = new storeItem('Buñuelos',
    'msnack3.jpeg',
    'Between a donut and a churro, fried and sugar coated.',
    2, 3, 2.50);
const msnacks = new storePage('Snacks');
msnacks.addItem(msnack1);
msnacks.addItem(msnack2);
msnacks.addItem(msnack3);
const mexican = new store("South end", "Manny's Amigo's", 'Mexican');
mexican.addPage(wraps);
mexican.addPage(tacos);
mexican.addPage(msnacks);

//===========================================
const ramen1 = new storeItem('Shoyu ramen',
    'ramen1.jpeg',
    'Ramen noodles flavoured with soy sauce.',
    2, 5, 4.00);
const ramen2 = new storeItem('Miso ramen',
    'ramen2.jpeg',
    'Ramen noodles flavoured with miso paste.',
    2, 5, 4.00);
const ramen3 = new storeItem('Tonkotsu Ramen',
    'ramen3.jpeg',
    'Ramen noodles cooked in a pork bone broth.',
    2, 5, 4.00);
const ramen = new storePage('Ramen');
ramen.addItem(ramen1);
ramen.addItem(ramen2);
ramen.addItem(ramen3);

const sushi1 = new storeItem('Maki',
    'sushi1.jpeg',
    'Rice an filling rolled in a seeweed wrap.',
    2, 5, 4.00);
const sushi2 = new storeItem('Sashimi',
    'sushi2.jpeg',
    'A delicious assortment of fish and shellfish.',
    2, 5, 5.00);
const sushi3 = new storeItem('Nigiri',
    'sushi3.jpeg',
    'Sliced fish served on top of sushi rice.',
    2, 5, 4.50);
const sushi = new storePage('Sushi');
sushi.addItem(sushi1);
sushi.addItem(sushi2);
sushi.addItem(sushi3);

const jside1 = new storeItem('Teriyaki tofu',
    'jside1.jpeg',
    'Crispy on the outside, pan rfied teriyaki tofu.',
    2, 4, 2.50);
const jside2 = new storeItem('Sesame broccoli',
    'jside2.jpeg',
    'Crispy salted broccoli, blanched in sesame oil.',
    2, 4, 2.00);
const jside3 = new storeItem('Salted chicken wings',
    'jside3.jpeg',
    'Sake soaked, salted and fried chicken wings.',
    2, 4, 2.50);
const jsides = new storePage('Sides');
jsides.addItem(jside1);
jsides.addItem(jside2);
jsides.addItem(jside3);
const japan = new store('West side', 'Hungry Lotus', 'Japanese');
japan.addPage(ramen);
japan.addPage(sushi);
japan.addPage(jsides);

//========================================================
const kstew1 = new storeItem('Hangover stew',
    'kstew1.jpeg',
    'Beef broth, cabbage, bean sprouts, radish and chunks of congealed ox blood to pickup your brain.',
    2, 5, 4.50);
const kstew2 = new storeItem('Soft tofu stew',
    'kstew2.jpeg',
    'Soft tofu, clams and an egg in spicy broth.',
    2, 5, 4.00);
const kstew3 = new storeItem('Army stew',
    'kstew3.jpeg',
    'A hodgepodge stew of sausages, spam, smerican cheese, instant noodles, tteok, and assorted vegetables.',
    2, 5, 4.00);
const kstews = new storePage('Stews');
kstews.addItem(kstew1);
kstews.addItem(kstew2);
kstews.addItem(kstew3);

const ksig1 = new storeItem('Galbi',
    'ksig1.jpeg',
    'Thick slabs of meat marinated in a mixture of soy sauce, chopped garlic, and sugar and grilled over fire.',
    2, 5, 6.00);
const ksig2 = new storeItem(' Chuncheon dakgalbi',
    'ksig2.jpeg',
    'Chicken marinated in a sauce of chili paste and other spices, stir-fried with tteok, cabbage, carrots, and sweet potato',
    2, 5, 4.50);
const ksig3 = new storeItem('Bossam',
    'ksig3.jpeg',
    'Steamed pork slices, wrapped in lettuce, perilla, or kimchi, and daubed with dipping sauce.',
    2, 5, 5.00);
const ksigs = new storePage('Signatures');
ksigs.addItem(ksig1);
ksigs.addItem(ksig2);
ksigs.addItem(ksig3);

const kseaf1 = new storeItem('Ojingeo chae bokkeum',
    'kseaf1.jpeg',
    'Strips of dried squid stir-fried together with chili paste and additions such as garlic, soy sauce, or rice wine.',
    2, 5, 5.00);
const kseaf2 = new storeItem('Meauntang',
    'kseaf2.jpeg',
    'Freshwater or saltwater fish such as cod, or sea bass, cooked in anchovy broth with vegetables and chilies.',
    2, 5, 5.50);
const kseaf3 = new storeItem('Hoedeopbap',
    'kseaf3.jpeg',
    'Rice bowl that is topped with raw fish and slices of fresh vegetables.',
    2, 5, 4.00);
const kseaf = new storePage('Seafood');
kseaf.addItem(kseaf1);
kseaf.addItem(kseaf2);
kseaf.addItem(kseaf3);
const korean = new store('North end','Happy Dumpling','Korean');
korean.addPage(kstews);
korean.addPage(ksigs);
korean.addPage(kseaf);