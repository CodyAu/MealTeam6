var restList = [];

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
    getStoreLogo() {
        return "https://images.template.net/wp-content/uploads/2016/04/22123121/Cool-Restaurant-Logo-Download.jpg"; // template
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
// 6 - cheese toast/garlic bread/no bread
const hotDog1 = new storeItem('Hot Dog',
    'dog1.jpg',
    'A footlong all beef hot dog on a sesame seed bun.'
    , 0, 1, 3.00);
const hotDog2 = new storeItem('Bacon Cheese Dog',
    'dog2.jpg',
    'Crispy bacon and cheddar cheese on our signature hot dog.',
    0, 1, 4.50);
const hotDog3 = new storeItem('Chilidog',
    'dog3.jpg',
    'Homemade hearty chili on our signature hot dog.',
    0, 1, 4.50);
const dogs = new storePage('Dogs');
dogs.addItem(hotDog1);
dogs.addItem(hotDog2);
dogs.addItem(hotDog3);

const burger1 = new storeItem('Hamburger',
    'burg1.jpg',
    'Hearty beef patty on a brioche bun.',
    0, 1, 4.00);
const burger2 = new storeItem('Bacon Cheeseburger',
    'burg2.jpg',
    'Savory maple bacon with jack cheese on our beef patty.',
    0, 1, 5.00);
const burger3 = new storeItem('Sloppy Joe',
    'burg3.jpg',
    'Homestyle pork chili on a toasted bun.',
    0, 1, 4.00);
const burgs = new storePage('Burgers');
burgs.addItem(burger1);
burgs.addItem(burger2);
burgs.addItem(burger3);

const side1 = new storeItem('Fries',
    'side1.jpg',
    'Cripsy home cut potatoes.',
    2, 3, 1.50);
const side2 = new storeItem('Onion Rings',
    'side2.jpg',
    'Cripsy breaded onion rings.',
    2, 3, 1.50);
const side3 = new storeItem('Salad',
    'side3.jpg',
    'Fresh greens and crunchy crutons topped with a light vinegrette.',
    2, 3, 1.50);
const sides = new storePage('Sides');
sides.addItem(side1);
sides.addItem(side2);
sides.addItem(side3);

const grillworks = new store('65 North Street', "Gary's Grill", 'Grillworks');
grillworks.addPage(dogs);
grillworks.addPage(burgs);
grillworks.addPage(sides);

//===========================================
const fish1 = new storeItem("Halibut",
    'fish1.jpg',
    'Crispy breaded halibut.',
    2, 4, 5.00);
const fish2 = new storeItem("Pickerel",
    'fish2.jpg',
    'Crispy breaded pickerel.',
    2, 4, 4.00);
const fish3 = new storeItem("Cod",
    'fish3.jpg',
    'Crispy breaded cod.',
    2, 4, 4.50);
const fishNchips = new storePage("Fish'n chips");
fishNchips.addItem(fish1);
fishNchips.addItem(fish2);
fishNchips.addItem(fish3);

const chkn1 = new storeItem('Chicken nuggets',
    'chkn1.jpg',
    'Savory breaded chicken nuggets.',
    2, 4, 3.00);
const chkn2 = new storePage('Chicken fingers',
    'chkn2.jpg',
    'Crispy breaded chicken tenders.',
    2, 4, 4.00);
const chkn3 = new storePage('Fried chicken',
    'chkn3.jpg',
    'Hearty crispy breaded chicken.',
    2, 4, 5.00);
const chicken = new storePage('Chicken');
chicken.addItem(chkn1);
chicken.addItem(chkn2);
chicken.addItem(chkn3);
const fryworks = new store("16 Aviary Ave", "Fryer Tuck's", 'Fryworks');
fryworks.addPage(fishNchips);
fryworks.addPage(chicken);
fryworks.addPage(sides);

//===============================================
const wrap1 = new storeItem('Chicken Taquitos',
    'wrap1.jpg',
    'Spicy chicken with diced red pepper and gaucamole inside a toasted flour tortilla.',
    2, 0, 4.00);
const wrap2 = new storeItem('Beef Quesadilla',
    'wrap2.jpg',
    'Savory seasoned ground beef with sauteed onions in a whole wheat tortilla.',
    2, 0, 5.00);
const wrap3 = new storeItem('Pork Enchiladas',
    'wrap3.jpg',
    'Marinated pork with red pepper blend in a corn tortilla.',
    2, 0, 4.50);
const wraps = new storePage('Wraps');
wraps.addItem(wrap1);
wraps.addItem(wrap2);
wraps.addItem(wrap3);

const taco1 = new storeItem('Spicy tacos',
    'taco1.jpg',
    'Ground beef mixed with our homemade spicy seasoning mix in a flour taco.',
    2, 3, 5.00);
const taco2 = new storeItem('Beef tacos',
    'taco2.jpg',
    'Ground beef with diced red peppers and guac in a whole wheat taco.',
    2, 3, 5.00);
const taco3 = new storeItem('Savory chicken taco',
    'taco3.jpg',
    'Shredded seasoned chicken with diced fried onions.',
    2, 0, 4.00);
const tacos = new storePage('Tacos');
tacos.addItem(taco1);
tacos.addItem(taco2);
tacos.addItem(taco3);

const msnack1 = new storeItem('Classic churros',
    'msnack1.jpg',
    'Deep fried dough rolled in cinnamon sugar and served with chocolate sauce.',
    2, 3, 2.00);
const msnack2 = new storeItem('Corn cake',
    'msnack2.jpg',
    'Sweet and moist, made with sweet corn, cornmeal, and corn flour.',
    2, 3, 3.00);
const msnack3 = new storeItem('Buñuelos',
    'msnack3.jpg',
    'Between a donut and a churro, fried and sugar coated.',
    2, 3, 2.50);
const msnacks = new storePage('Snacks');
msnacks.addItem(msnack1);
msnacks.addItem(msnack2);
msnacks.addItem(msnack3);
const mexican = new store("37 Taco Drive", "Manny's Amigos", 'Mexican');
mexican.addPage(wraps);
mexican.addPage(tacos);
mexican.addPage(msnacks);

//===========================================
const ramen1 = new storeItem('Shoyu ramen',
    'ramen1.jpg',
    'Ramen noodles flavoured with soy sauce.',
    2, 5, 4.00);
const ramen2 = new storeItem('Miso ramen',
    'ramen2.jpg',
    'Ramen noodles flavoured with miso paste.',
    2, 5, 4.00);
const ramen3 = new storeItem('Tonkotsu Ramen',
    'ramen3.jpg',
    'Ramen noodles cooked in a pork bone broth.',
    2, 5, 4.00);
const ramen = new storePage('Ramen');
ramen.addItem(ramen1);
ramen.addItem(ramen2);
ramen.addItem(ramen3);

const sushi1 = new storeItem('Maki',
    'sushi1.jpg',
    'Rice an filling rolled in a seeweed wrap.',
    2, 5, 4.00);
const sushi2 = new storeItem('Sashimi',
    'sushi2.jpg',
    'A delicious assortment of fish and shellfish.',
    2, 5, 5.00);
const sushi3 = new storeItem('Nigiri',
    'sushi3.jpg',
    'Sliced fish served on top of sushi rice.',
    2, 5, 4.50);
const sushi = new storePage('Sushi');
sushi.addItem(sushi1);
sushi.addItem(sushi2);
sushi.addItem(sushi3);

const jside1 = new storeItem('Teriyaki tofu',
    'jside1.jpg',
    'Crispy on the outside, pan rfied teriyaki tofu.',
    2, 4, 2.50);
const jside2 = new storeItem('Sesame broccoli',
    'jside2.jpg',
    'Crispy salted broccoli, blanched in sesame oil.',
    2, 4, 2.00);
const jside3 = new storeItem('Salted chicken wings',
    'jside3.jpg',
    'Sake soaked, salted and fried chicken wings.',
    2, 4, 2.50);
const jsides = new storePage('Sides');
jsides.addItem(jside1);
jsides.addItem(jside2);
jsides.addItem(jside3);
const japan = new store('61 Tokyo St', 'Hungry Lotus', 'Japanese');
japan.addPage(ramen);
japan.addPage(sushi);
japan.addPage(jsides);

//========================================================
const kstew1 = new storeItem('Hangover stew',
    'kstew1.jpg',
    'Beef broth, cabbage, bean sprouts, radish and chunks of congealed ox blood to pickup your brain.',
    2, 5, 4.50);
const kstew2 = new storeItem('Soft tofu stew',
    'kstew2.jpg',
    'Soft tofu, clams and an egg in spicy broth.',
    2, 5, 4.00);
const kstew3 = new storeItem('Army stew',
    'kstew3.jpg',
    'A hodgepodge stew of sausages, spam, smerican cheese, instant noodles, tteok, and assorted vegetables.',
    2, 5, 4.00);
const kstews = new storePage('Stews');
kstews.addItem(kstew1);
kstews.addItem(kstew2);
kstews.addItem(kstew3);

const ksig1 = new storeItem('Galbi',
    'ksig1.jpg',
    'Thick slabs of meat marinated in a mixture of soy sauce, chopped garlic, and sugar and grilled over fire.',
    2, 5, 6.00);
const ksig2 = new storeItem('Chuncheon dakgalbi',
    'ksig2.jpg',
    'Chicken marinated in chili paste and other spices, stir-fried with tteok, cabbage, carrots, and sweet potato',
    2, 5, 4.50);
const ksig3 = new storeItem('Bossam',
    'ksig3.jpg',
    'Steamed pork slices, wrapped in lettuce, perilla, or kimchi, and daubed with dipping sauce.',
    2, 5, 5.00);
const ksigs = new storePage('Signatures');
ksigs.addItem(ksig1);
ksigs.addItem(ksig2);
ksigs.addItem(ksig3);

const kseaf1 = new storeItem('Ojingeo chae bokkeum',
    'kseaf1.jpg',
    'Strips of dried squid stir-fried together with chili paste and additions such as garlic, soy sauce, or rice wine.',
    2, 5, 5.00);
const kseaf2 = new storeItem('Meauntang',
    'kseaf2.jpg',
    'Freshwater or saltwater fish such as cod, or sea bass, cooked in anchovy broth with vegetables and chilies.',
    2, 5, 5.50);
const kseaf3 = new storeItem('Hoedeopbap',
    'kseaf3.jpg',
    'Rice bowl that is topped with raw fish and slices of fresh vegetables.',
    2, 5, 4.00);
const kseaf = new storePage('Seafood');
kseaf.addItem(kseaf1);
kseaf.addItem(kseaf2);
kseaf.addItem(kseaf3);
const korean = new store('94 Panda Blvd','Happy Dumpling','Korean');
korean.addPage(kstews);
korean.addPage(ksigs);
korean.addPage(kseaf);

//==================================================
const gsig1 = new storeItem('Souvlaki',
'gsig1.jpg',
'Chunck of fire roasted meat on chopped tomatoes and onion in a fresh pita.',
2, 4, 4.50);
const gsig2 = new storeItem('Octopus skewers',
'gsig2.jpg',
'Grilled octopus on skewers.',
3, 4, 3.00);
const gsig3 = new storeItem('Barbouni',
'gsig3.jpg',
'Lightly fried, whole red mullet drizzled with a lemon an oil dressing.',
0, 4, 4.00);
const gsigs = new storePage('Signatures');
gsigs.addItem(gsig1);
gsigs.addItem(gsig2);
gsigs.addItem(gsig3);

const gyro1 = new storeItem('Lamb gyro',
'gyro1.jpg',
'Slices of tender seasond lamb, tzatziki, tomatoes, cucumber wrapped in pita bread.',
3, 4, 4.50);
const gyro2 = new storeItem('Pork gyro',
'gyro2.jpg',
'Chuncks or roasted pork, tzatziki, tomatoes, cucumber wrapped in pita bread.',
3, 4, 4.00);
const gyro3 = new storeItem('Beef gyro',
'gyro3.jpg',
'Strips of marinated beef, tzatziki, tomatoes, cucumber wrapped in pita bread.',
3, 4, 4.50);
const gyros = new storePage('Gyros');
gyros.addItem(gyro1);
gyros.addItem(gyro2);
gyros.addItem(gyro3);

const gpasta1 = new storeItem('Lobster pasta',
'gpasta1.jpg',
'Savory lobster served on spagetti with wine sauce.',
2,4,4.00);
const gpasta2 = new storeItem('Kritharaki',
'gpasta2.jpg',
'Short noodles served in tomato sauce with chicken, nuts, nutmeg, and peas.',
2,4,4.50);
const gpasta3 = new storeItem('Pastitsio',
'gpasta3.jpg',
'Baked pasta dish with bechamel sauce and ground beef.',
2,4,4.50);
const gpasta = new storePage('Pasta');
gpasta.addItem(gpasta1);
gpasta.addItem(gpasta2);
gpasta.addItem(gpasta3);
const greek = new store('13 Tartarus Way','Happy Olympia','Greek');
greek.addPage(gsigs);
greek.addPage(gyros);
greek.addPage(gpasta);

//=================================================
const cnoodle1 = new storeItem('Chicken chow mein',
'cnoodle1.jpg',
'Chow mein noodles served with fried chicken and vegetables, served in oyster sauce.',
2,5,4.00);
const cnoodle2 = new storeItem('Beef Noodle Soup',
'cnoodle2.jpg',
'Cubed beef in a seasoned broth served over noodles with bok choy.',
2,5,5.00);
const cnoodle3 = new storeItem('Pan-Fried noodles',
'cnoodle3.jpg',
'Crispy noodles can then be topped with a stir-fried mixture of meat, chicken, seafood, and/or vegetables.',
2,5,6.00);
const cnoodles = new storePage('Noodles');
cnoodles.addItem(cnoodle1);
cnoodles.addItem(cnoodle2);
cnoodles.addItem(cnoodle3);

const csoup1 = new storeItem('Luosifen',
'csoup1.jpg',
'Snail-based broth, rice noodles, pickled bamboo shoots, peanuts, tofu skins, and green vegetables.',
2,5,4.00);
const csoup2 = new storeItem('Over the bridge noodles',
'csoup2.jpg',
'Chicken soup, rice noodles, sliced meat, and vegetables.',
2,5,5.00);
const csoup3 = new storeItem('Hot and sour soup',
'csoup3.jpg',
'Day lily buds, bamboo shots, tofu, wood ear fungus, pork blood-flavored broth, red peppers, and vinegar.',
2,5,5.00);
const csoups = new storePage('Soups');
csoups.addItem(csoup1);
csoups.addItem(csoup2);
csoups.addItem(csoup3);

const crice1 = new storeItem('Yin-Yang fried rice',
'crice1.jpg',
"Fried rice with chicken, ketchup sauce, onions (one side), shrimp, peas, and egg whites (other side).",
2,5,4.00);
const crice2 = new storeItem('Lotus leaf rice',
'crice2.jpg',
"Seasoned sticky rice with meat, wrapped and steamed in lotus leaves.",
2,5,4.50);
const crice3 = new storeItem('Hokkien',
'crice3.jpg',
"Rice and eggs stir-fried together, topped with poultry gravy, dried mushrooms, seafood, and vegetables.",
2,5,4.00);
const crices = new storePage('Rice');
crices.addItem(crice1);
crices.addItem(crice2);
crices.addItem(crice3);
const chinese = new store('81 Ocean Drive','Yin and Yummy','Chinese');
chinese.addPage(cnoodles);
chinese.addPage(csoups);
chinese.addPage(crices);

//==============================================
const ipasta1 = new storeItem('Toasted ravioli',
'ipasta1.jpg',
'Crispy cheese and marinara filled ravioli purses.',
2,6,5.50);
const ipasta2 = new storeItem('Carbonara',
'ipasta2.jpg',
'Hearty bacon and onion laden spagetti in a creamy egg with garlic.',
2,6,6.00);
const ipasta3 = new storeItem('Chicken alfredo',
'ipasta3.jpg',
'Creamy cheese sauce and grilled chicken breast on linguine.',
2,6,5.00);
const ipastas = new storePage('Pasta');
ipastas.addItem(ipasta1);
ipastas.addItem(ipasta2);
ipastas.addItem(ipasta3);

const iseaf1 = new storeItem('Acqua pazza',
'iseaf1.jpg',
'Poached fish, with broth flavored by olive oil and tomatoes.',
2,6,5.00);
const iseaf2 = new storeItem('Calamari ripieni',
'iseaf2.jpg',
'Calamari are stuffed with garlic, breadcrumbs, capers, pine nuts, parsley, and onions.',
2,6,5.50);
const iseaf3 = new storeItem('Fritto misto di pesce',
'iseaf3.jpg',
'Crustaceans and mollusks, typically shrimp and squid, all batter-fried golden brown.',
2,6,6.00);
const iseafs = new storePage('Seafood');
iseafs.addItem(iseaf1);
iseafs.addItem(iseaf2);
iseafs.addItem(iseaf3);

const pizza1 = new storeItem('Meat lovers',
'pizza1.jpg',
'Sausage, bacon, salami, and pepperoni stuck together on a blanket of cheese.',
2,6,6.50);
const pizza2 = new storeItem('Mediterranean',
'pizza2.jpg',
'Sun dried & cherry tomatoes, fresh parsley, red onions, olives, and artichoke hearts.',
2,6,5.50);
const pizza3 = new storeItem('5 cheese pizza',
'pizza3.jpg',
'Mozzarella, cheddar, feta, brie, and ricotta.',
2,6,5.50);
const pizzas = new storePage('Pizza');
pizzas.addItem(pizza1);
pizzas.addItem(pizza2);
pizzas.addItem(pizza3);
const italian = new store('17 Spaghetti Street','The Other Bro','Italian');
italian.addPage(ipastas);
italian.addPage(iseafs);
italian.addPage(pizzas);

//==================================================
const pastry1 = new storeItem('Macaroons',
'pastry1.jpg',
'Two little almond cookies liked together by flavored ganache.',
3,4,3.00);
const pastry2 = new storeItem('Madeleine',
'pastry2.jpg',
'Little cakes made with eggs and butter.',
3,4,2.00);
const pastry3 = new storeItem('Rose des Sables',
'pastry3.jpg',
'Made with cornflakes dipped in melted chocolate.',
3,4,2.50);
const pastries = new storePage('Pastries');
pastries.addItem(pastry1);
pastries.addItem(pastry2);
pastries.addItem(pastry3);

const fsoup1 = new storeItem('Garbure',
'fsoup1.jpg',
'Meat, cheese, stale bread, and vegetables such as cabbage, peas, onions, or carrots.',
2,4,4.50);
const fsoup2 = new storeItem('French onion',
'fsoup2.jpg',
'Made with caramelized onions and meat stock.',
2,6,4.00);
const fsoup3 = new storeItem('Bisque',
'fsoup3.jpg',
'Thick and creamy with, seafood, cognac or wine, and a combination of spices.',
2,4,4.00);
const fsoups = new storePage('Soups');
fsoups.addItem(fsoup1);
fsoups.addItem(fsoup2);
fsoups.addItem(fsoup3);

const fsig1 = new storeItem('Cassoulet',
'fsig1.jpg',
'Meat and beans slow cooked in a cassarole pot.',
2,6,4.50);
const fsig2 = new storeItem('Confit de canard',
'fsig2.jpg',
'Duck meat, slow roasted in its own fat.',
2,4,5.00);
const fsig3 = new storeItem('Steak au poivre',
'fsig3.jpg',
'Beef steak that is coated in crushed peppercorns and fried.',
2,6,5.50);
const fsigs = new storePage('Entrees');
fsigs.addItem(fsig1);
fsigs.addItem(fsig2);
fsigs.addItem(fsig3);
const french = new store('23 Bread Bay','Grumpy Baguette','French');
french.addPage(pastries);
french.addPage(fsoups);
french.addPage(fsigs);

//===============================================
const isnack1 = new storeItem('Pakora',
'isnack1.jpg',
'Deep-fried Indian snack made with pieces of vegetables such as cauliflower and eggplant.',
3,4,3.50);
const isnack2 = new storeItem('Ras malai',
'isnack2.jpg',
'Dessert consisting of white cream, sugar, milk, and cardamom-flavored paneer cheese.',
2,4,4.50);
const isnack3 = new storeItem('Jalebi',
'isnack3.jpg',
'Flour with yogurt or ghee, and baking soda or yeast to make batter that is then fried.',
3,4,3.00);
const isnacks = new storePage('Snacks');
isnacks.addItem(isnack1);
isnacks.addItem(isnack2);
isnacks.addItem(isnack3);

const curry1 = new storeItem('Pav bhaji',
'curry1.jpg',
'Vegetables of the day mashed and combined with spices and ghee butter.',
2,6,4.00);
const curry2 = new storeItem('Chana masala',
'curry2.jpg',
'Chickpeas simmered in spices and herbs, served with rice.',
2,6,4.50);
const curry3 = new storeItem('Misal',
'curry3.jpg',
'Curd, pav, moth bean or pea curry, gravy, spiced potatoes, garnisheds with onions.',
2,6,4.00);
const icurrys = new storePage('Curry');
icurrys.addItem(curry1);
icurrys.addItem(curry2);
icurrys.addItem(curry3);

const irice1 = new storeItem('Pongal',
'irice1.jpg',
'Rice in a dish with mung beans, cane sugar, and ground cashews.',
2,4,4.00);
const irice2 = new storeItem('Hyderabadi biryani',
'irice2.jpg',
'Basmati rice, goat, mutton, or chicken meat, lemon, yogurt, onions, and saffron.',
2,6,5.00);
const irice3 = new storeItem('Pulihora',
'irice3.jpg',
'Rice, turmeric, tamarind, curry leaves, coriander, ginger, and green chiles.',
2,6,4.50);
const irices = new storePage('Rice');
irices.addItem(irice1);
irices.addItem(irice2);
irices.addItem(irice3);
const indian = new store('57 Lakeside Blvd','Bollywood Spice','Indian');
indian.addPage(isnacks);
indian.addPage(icurrys);
indian.addPage(irices);

restList.push(indian);
restList.push(french);
restList.push(italian);
restList.push(chinese);
restList.push(greek);
restList.push(korean);
restList.push(japan);
restList.push(mexican);
restList.push(fryworks);
restList.push(grillworks);