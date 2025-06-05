### Type of datatype
    1. primitive data type (call by value)
       - number
       - string
       - boolean
       - null
       - undefined

    2. reference data type (call by address / reference)
       - arrays
       - object

### Declare variable
    - var
    - let
    - const

### Examples Data Types
    var age = 18;                           // number 
    var name = "Jane";                      // string
    var name = {first:"Jane", last:"Doe"};  // object
    var truth = false;                      // boolean
    var sheets = ["HTML","CSS","JS"];       // array
    var a; typeof a;                        // undefined
    var a = null;                           // value null


### Variables
    var a;                          // variable declaration
    var b = "init";                 // string
    var c = "Hi" + " " + "Joe";     // = "Hi Joe"
    var d = 1 + 2 + "3";            // = "33"
    var e = [2,3,5,8];              // array
    var f = false;                  // boolean
    var g = /()/;                   // RegEx => Note - I will explain later
    var h = function(){};           // function object
    const PI = 3.14;                // constant
    var a = 1, b = 2, c = a + b;    // one line
    let z = 'zzz';                  // block scope local variable
    Note - Explain scope

### Strings
    var abc = "abcdefghijklmnopqrstuvwxyz";
    var esc = 'I don\'t \n know';   // \n new line
    var len = abc.length;           // string length
    abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
    abc.lastIndexOf("lmno");        // last occurance
    abc.slice(3, 6);                // cuts out "def", negative values count from behind
    abc.replace("abc","123");       // find and replace, takes regular expressions
    abc.toUpperCase();              // convert to upper case
    abc.toLowerCase();              // convert to lower case
    abc.concat(" ", str2);          // abc + " " + str2
    abc.charAt(2);                  // character at index: "c"
    abc[2];                         // unsafe, abc[2] = "C" doesn't work
    abc.charCodeAt(2);              // character code at index: "c" -> 99 // Note - nahi samajh aaya
    abc.split(",");                 // splitting a string on commas gives an array
    abc.split("");                  // splitting on characters
    128.toString(16);               // number to hex(16), octal (8) or binary (2)



### Values
    false, true                     // boolean
    18, 3.14, 0b10011, 0xF6, NaN    // number
    "flower", 'John'                // string
    undefined, null , Infinity      // special


### Operators
    a = b + c - d;      // addition, substraction
    a = b * (c / d);    // multiplication, division
    x = 100 % 48;       // modulo. 100 / 48 remainder = 4
    a++; b--;           // postfix increment and decrement


### Arithmetic
    a * (b + c)         // grouping
    person.age          // member
    person[age]         // member
    !(a == b)           // logical not
    a != b              // not equal
    typeof a            // type (number, object, function...)
    x << 2  x >> 3      // minary shifting
    a = b               // assignment
    a == b              // equals
    a != b              // unequal
    a === b             // strict equal
    a !== b             // strict unequal
    a < b   a > b       // less and greater than
    a <= b  a >= b      // less or equal, greater or eq
    a += b              // a = a + b (works with - * %...)
    a && b              // logical and
    a || b              // logical or



### Loops
    - For Loop
        for (var i = 0; i < 10; i++) {
        document.write(i + ": " + i*3 + "<br />");
        }
        var sum = 0;
        for (var i = 0; i < a.length; i++) {
        sum + = a[i];
        }               // parsing an array
        html = "";
        for (var i of custOrder) {
        html += "<li>" + i + "</li>";
        }
    - While Loop
        var i = 1;                      // initialize
        while (i < 100) {               // enters the cycle if statement is true
        i *= 2;                     // increment to avoid infinite loop
        document.write(i + ", ");   // output
        }
    - Do While Loop
        var i = 1;                      // initialize
        do {                            // enters cycle at least once
        i *= 2;                     // increment to avoid infinite loop
        document.write(i + ", ");   // output
        } while (i < 100)               // repeats cycle if statement is true at the end
    - Break
        for (var i = 0; i < 10; i++) {
        if (i == 5) { break; }          // stops and exits the cycle
        document.write(i + ", ");       // last output number is 4
        }
    - Continue
        for (var i = 0; i < 10; i++) {
        if (i == 5) { continue; }       // skips the rest of the cycle
        document.write(i + ", ");       // skips 5
        }


### Arrays
    var dogs = ["Bulldog", "Beagle", "Labrador"]; 
    var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

    alert(dogs[1]);             // access value at index, first item being [0]
    dogs[0] = "Bull Terier";    // change the first item

    for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
    console.log(dogs[i]);
    }


### Arrays methods
    dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
    dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
    dogs.pop();                             // remove last element
    dogs.push("Chihuahua");                 // add new element to the end
    dogs[dogs.length] = "Chihuahua";        // the same as push
    dogs.shift();                           // remove first element
    dogs.unshift("Chihuahua");              // add new element to the beginning
    delete dogs[0];                         // change element to undefined (not recommended)
    dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
    var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
    dogs.slice(1,4);                        // elements from [1] to [4-1]
    dogs.sort();                            // sort string alphabetically
    dogs.reverse();                         // sort string in descending order
    x.sort(function(a, b){return a - b});   // numeric sort
    x.sort(function(a, b){return b - a});   // numeric descending sort
    highest = x[0];                         // first item in sorted array is the lowest (or highest) value
    x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort




### Key Concepts
    Basics – Introduction to JavaScript syntax. Learn how to include the scripts on a HTML page, how to declare a function, target a DOM element by it ID, how to output the data and how to write comments.
    Loops – Most programming languages allow to work with loops, which help in executing one or more statements up to a desired number of times. Find the "for" and "while" loop syntax in this section.
    If - Else statements – Conditional statements are used to perform different actions based on different conditions.
    Variables – Use variables (numbers, strings, arrays etc.) and learn the operators.
    Data types – You can declare many types of variables and declare your own objects in JavaScript.
    Strings – Learn how to work with JS strings and find the most common functions to work with this data type.
    Events – Use JavaScript event listeners to trigger functions.
    Numbers and math – Work with JS numbers, predefined constants and perform math functions.
    Dates – Get or modify current time and date.
    Arrays – Learn how to organize your vairables in vectors and how to use them.
    Global functions – Predefined functions that are built in every browser that supports JS.
    Regular expressions – Use RegEx to define a search pattern.
    Errors – JS error handling.
    JSON – JavaScript Object Notation is syntax used for storing and exchanging data.
    Promises – The Promise object is used for asynchronous computation. See our example on how to declare one.


