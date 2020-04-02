//Functions

function test(){
    console.log("I am a function");
}
test();

function argument(argument){
    console.log(argument);
}
argument("Edis");

function add(x,y){
  return x + y;
}
console.log(add(2, 7));

let z = function add(x,y){
    return x + y;
};
z(1, 11);
console.log(z(1, 11));