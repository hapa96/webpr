# Toolbox Javascript

[toc]

## JavaScript Basics

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
//Alpha Translation --> Umbenennen
const id = x => x

// Beta Reduktion --> Anwenden
( f => x => f (x))(id)(1)
(      x =>id(x))	  (1)
(			id(1))
(x=>x)(1)
1

//Eta Reduktion
x => y =>plus(x)(y)	//Wenn y so da steht
x =>	 plus(x)
		 plus
```



