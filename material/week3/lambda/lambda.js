
const id = x =>x;
const konst = x => y => x;
const fst = konst;
const snd = x => y => y;

//Implement True
//const T = a => b => a
const T = fst

//Implement False
//const F = a => b => b
const F = snd;

// And  -->            Wenn a True ist gebe B zurück, wenn a False ist gebe a zurück == false
const and = a => b => a (b) (a); 

//OR    --> Wenn a True ist gebe a zurück (== True) wenn a False ist gebe b zurück (True | False)
const or = a => b => a(a)(b)

//Immutable. f ist wie einen getter und wird mit firstname oder lastname aufgerufen.
const pair = x => y => f => f (x) (y)
const firstname = fst;
const lastname = snd;


const Left = x => f => g =>f (x);
const Right = x => f => g =>g (x);
const either = e => f => g =>e (f) (g);
// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];
