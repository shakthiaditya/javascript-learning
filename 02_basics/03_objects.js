// Singleton
        //Object.create

//Object Literals

const mySym = Symbol("key1");
console.log(mySym);

const JsUser = {
    name : "Shakthi",
    "full name" : "Shakthi Aditya",
    age : 21,
    [mySym] : "mykey1",             //Symbols can be used in an object like a symbol only if it is wrapped in a square bracket
    location : "Chennai",
    email : "shakthi@google.com",
    loggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.location);   // Strict rules are followed and errors are thrown
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


// //Object.freeze(JsUser);      // Used to lock the object and prevent it from changes
// JsUser.email = "shakthi@microsoft.com";
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JsUser!!");
}

JsUser.greeting();  
console.log(JsUser.greeting); //Returns the reference of the function


JsUser.greeting2 = function () {
    console.log(`Hello JsUser!! ${this.name}`); //Here, this represents the object attributes
}

JsUser.greeting2();

