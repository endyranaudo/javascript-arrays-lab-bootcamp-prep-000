var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(){
  let newKitten = ["Broom"]
  let newArr = kittens.concat(newKitten)
}