//alert("JavaScript works!");
// Timothy Binney
// SDI Project 3
// Term Number 1402
// Dragon Battle

var myWeapons = ["bow", "sword", "daggers"]; //array used in solofight function
var myPrompt;                               //procedure
var returnValue;                            //function2 battleloop
var json2 = json2                           //json data as a global variable
var soloFight;                              // function3 array argument 
var recieveClassInfo;                       //json/array argument function1
var lootDistributed;                        // function4 
var coinsLooted = 2000;
var lootFunction;
var goSeperateWays;                         // function5 using boolean argument              

console.log("After a long journey you finally reach the dragons lair with your friendly adventurers!")

var recieveClassInfo = function (json2) {
    for (var i = 0; i < json2.companions.length; i++) {
        var companion = json2.companions[i];
        console.log("Your " + companion.role + " is the " + companion.job + " and he is level " + companion.level + " .");
        
    };
    
};

recieveClassInfo(json2);

console.log("You possess skills unlike their own skills and are well trained with a sword , daggers, and a bow.");

myPrompt = prompt("Would you like to prepare your sword, daggers, or bow first?")
            if (myPrompt === "sword") {
                console.log("You sharpen the blade of your finest longsword");
            }
            if (myPrompt === "daggers") {
                console.log("You grab your daggers and strike them together.")
            }
            if (myPrompt === "bow") {
            console.log("You grab your bow and make sure your string is tight and ready to let loose hell!");

            };          
            
console.log("The party spots the dragon almost at the same time the dragon spots the party")
console.log("The party rushes into battle and attacks the dragon!!")
console.log("The dragon has a massive 1500 healthpool and furociously attacks the party back!")


var getBattle = function (hitpoints) {
    
    while (hitpoints > 300)
    {
        console.log("The paladin shields the party of damage and takes 100 hp loss.")
        console.log( "The mage hurls a frostbomb at the dragon for 200 damage.")
        console.log( "The priest heals the tank for 100 hp.")
        console.log( "The rogue stabs the dragon in the back for 100 damage.")
        hitpoints = hitpoints - 300
        console.log("The dragons health is at " + hitpoints)
        
    };
    
    return hitpoints;
}

returnValue = getBattle(1500);

console.log("The dragon returns to fight till its last breathe!")
console.log("The rogue runs in terror with whatever loot he could find.")