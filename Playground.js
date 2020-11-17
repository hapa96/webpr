const z_ = 1;
const x_= 2;
const y_ = 10;
const Observable = value => {
    const listeners = [];
    return {
        onChange: callback => {
            listeners.push(callback);
            callback(value, value);
        },
        getValue: ()       => value,
        setValue: newValue => {
            if (value === newValue) return;
            const oldValue = value;
            value = newValue;
            listeners.forEach(callback => callback(value));
        }
    }
};

let sum = 0;
let product = 1                                 
const trackable = Observable(1);

trackable.onChange(n => sum += n);
trackable.onChange(n => product *= n);


//Test
trackable.setValue(x_); // values x_, y_, z_ are given. Do not override.
trackable.setValue(y_);
trackable.setValue(z_);

document.writeln(sum);
document.writeln(product);