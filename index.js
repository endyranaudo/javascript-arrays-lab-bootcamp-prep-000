var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function preAppendKitten(name){
  let newKitten = [(name)];
  return newKitten.concat(kittens);
}

function preAppendKitten(name){
  let newKitten = (name)
  let newArr = kittens.slice(0)
  return kittens.slice(0, newKitten)
}

