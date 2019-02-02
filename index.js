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

function appendKitten(name){
  let newKitten = (name)
  return kittens.concat(newKitten)
}

function preAppendKitten(name){
  let newKitten = (name);
  return newKitten.splice(0,0, newKitten)
}
