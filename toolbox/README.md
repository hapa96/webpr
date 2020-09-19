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

