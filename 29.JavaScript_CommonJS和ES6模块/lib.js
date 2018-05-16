//CommonJS
let counter = 3;
function incCounter() {
    counter++;
}
module.exports = {
    counter:counter,
    incCounter:incCounter
};

//ES6 模块

export let counter = 3;
export function incCounter() {
    counter++;
}