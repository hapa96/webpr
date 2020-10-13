const join = delimeter => (accu, cur) => (accu + delimeter + cur);

document.writeln ([1,2,3].reduce(join('-')) === '1-2-3');