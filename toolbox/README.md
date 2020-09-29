

# Toolbox Javascript

[toc]


### Keywords

[MDN Reference](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference) 

### JavaScript Verhalten

JavaScript ist eine interpretierte Sprache. Somit kann man in JavaScript auch keine Methoden überladen.

```javascript
// Methode wird überschrieben.
function fun2()    { return 1; }	//1.
function fun2(arg) { return arg; } // Überschreibt 1.

//Tests
document.writeln( fun2() !== 1  );
document.writeln( fun2() === undefined );
document.writeln( fun2(42) === 42 );
```

### return Keyword nicht vergessen

```javascript
function noReturn()    { 1; }
const noReturn2 = () => {1; }; //Daumenregel: Mit geschweiften Klammern braucht es immer return
const noReturn3 = () => 1;

document.writeln( noReturn() !== 1 );
document.writeln( noReturn2() !== 1 );
document.writeln( noReturn3() === 1 );
```

### Curied functions

```javascript
const plus = x => y => x+y 

plus(10)(20) === 30 // true
```

### Canvas

[Canvas Tutorial MDN](https://developer.mozilla.org/de/docs/Web/Guide/HTML/Canvas_Tutorial) 

```html
<html><head><title>Ball</title></head><body onload="start()">

<!-- Create a Canvas Element in the HTML File -->
<canvas id="canvas" width="400" height="400"> </canvas>
</body>
<html>
```



```javascript
//Java Script
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.fillStyle = "black";
context.fillRect(0,0,canvas.width, canvas.height);
```

### Key Events

```javascript
const rightArrow =39;
const leftArrow = 37;
window.onkeydown = evt =>{
    (evt.keyCode == rightArrow) ? ... : ...;
};
```



### Wiederkehrende Aktion setInterval()

```javascript
// Führt Funktion alle 3 Sekunden aus
setInterval( () => alert("Hello"), 3000); 

// Ladet neues Game jede 1000/10ms
setInterval(() => {
        console.log(`Snake length : ${snake.length}`)
        nextBoard();
        display(context);
    }, 1000 / 10);
}
```

### Arrays in JavaScript

```javascript
// Neues Array erzeugen
let arr1 = [1,2,3];

//Snake Variante
let arr2 = [
    {x: 10, y: 5},
    {x: 10, y: 6},
    {x: 10, y: 7}
];

arr1.pop(); //returns and remove the last Element of the Array [1,2]
arr1.push(3);// adds a new Element at the End of the Array [1,2,3]
arr1.unshift(0); //put Element at the beginning of the array [0,1,2,3]
arr1.shift(); //returns and removes first elemnt of Array

```

### Scopes

Every Variable has his own scope

`global` Window ( in Browser)

`function` No matter where defined, variables are local to the enclosing function ( lambda)

#### JavaScript Variables

```javascript
x = ... 		//mutable, global scope --> Don't use
var x = ...		//mutable, "hoisted" scope --> Don't use
let x = ...		//mutable, local scope
const x = ...	//immutable, local scope
```

### IIFE

Immediately Invoked Function Expression

```javascript
( () => {let x = 2; document.writeln(x ===2)}) ()
```

### Lambda Kalkül

Kalkül = Eine Art, wie man Schlussfolgerungen zieht. --> Logik

```javascript
//Alpha Translation --> Parameter Umbenennen
const id = x => x
const id = y => y

// Beta Reduktion --> Argument einsetzen
( f => x => f (x))(id)(1)
(      x =>id(x))	  (1)
(			id(1))
(x=>x)(1)
1

//Eta Reduktion --> Parameter kürzen
x => y =>plus(x)(y)	//Wenn y so da steht
x =>	 plus(x)
		 plus
```
![Beta](C:\Users\pascal.hauser1\Documents\repos\webpr\toolbox\README.assets\Beta.PNG)

![Eta](C:\Users\pascal.hauser1\Documents\repos\webpr\toolbox\README.assets\Eta.PNG)

#### Logic with Lambda

**Basic Functions**

```javascript
const id = x =>x;
const konst = x => y => x;
const fst = konst;
const snd = x => y => y;
```

**True | False** 

```javascript
//Implement True
//const T = a => b => a
const T = fst

//Implement False
//const F = a => b => b
const F = snd;
```

**And**

```javascript
// And  --> Wenn a True ist gebe B zurück, wenn a False ist gebe a zurück == false
const and = a => b => a (b) (a);
```

**Or** 

```javascript
//OR --> Wenn a True ist gebe a zurück (== True) wenn a False ist gebe b zurück (T|F)
const or = a => b => a(a)(b)
```

**Pair** 

```javascript
//Immutable. f ist wie einen getter und wird mit firstname oder lastname aufgerufen.
const pair = x => y => f => f (x) (y)
const firstname = fst;
const lastname = snd;
```



### regEx

Use Regual Expressions to find or edit patterns in a string.
The literal notation's parameters are enclosed between slashes and do not use quotation marks.

```javascript
let string = "I like Javascript"
// literal notation --> search for the term like and replace it by the word love
string = string.replace(/like/g,'love'); //"I love Javascript"
```

### ... Spread Operator

[Spread Operator MDN](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Spread_operator) 

```javascript
//...y "sammelt" alle Argumente, welche nach x kommen in der Variable y
const f1 = (x, ...y) => console.log(x,y);
f1(1,2) //1-2
f1(1,2,3,4,5,6) //1-[2,3,4,5,6]
//Kapselt Argumente in Y und "entkapselt" sie wieder
const f2 = (x, ...y) => console.log(x, ...y); 
f2(1,2,3,4,5,6) //1-2-3-4-5-6
```

