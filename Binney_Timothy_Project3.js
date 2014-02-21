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