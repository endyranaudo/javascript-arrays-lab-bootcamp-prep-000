var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(){
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

function appendKitten(){
  let newKitten = ["Broom"]
  return kittens.concat(newKitten)
}

function preAppendKitten(){
  let newKitten = ["Arnold"]
  return kittens.slice(newKitten)
}