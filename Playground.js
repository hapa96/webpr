/* *Copy* the following code into the edit area and fill the ___ gaps. */

const NullSafe = (x) => {
  const isNullSafe = (y) => y && y.then;
  const maywrap = (y) => (isNullSafe(y) ? y : NullSafe(y));
  return {
    then: (fn) => (x !== null && x != undefined ? maywrap(fn(x)) : NullSafe(x)),
  };
};

/* 
(1) if x is not null or undefined, call fn(x); either way, make sure the result is a NullSafe 

Fill the gaps such that NullSafe objects can be chained with their "then" function
just like Promises do, incl. auto-promotion of result values to NullSafe objects.

NullSafe(1).then(console.log);                   // will call the log
NullSafe(null).then(console.log);                // will not call the log
NullSafe(2).then( x => null).then(console.log);  // will not call the log 
*/

let x_ = 1;
let y_ = 2;

document.writeln(
  NullSafe(x_)
    .then((x) => x * 2) // must auto-promote
    .then((x) => NullSafe(x)) // must not auto-promote
    .then((x) => (y_ = x + 1)) // store value, check no double promotion
    .then((x) => null) // jump over rest
    .then((x) => x.mustNotBeCalled) !== null && y_ === x_ * 2 + 1
);
