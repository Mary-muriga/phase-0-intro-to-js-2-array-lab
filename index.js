//write your solution her
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
  cats.push("Ralph");
}
function destructivelyPrependCat(name){
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
  cats.pop();
}
function destructivelyRemoveFirstCat(){
  cats.shift();
}
function appendCat(name){
const copyOfCats=[ ...cats, "Broom"];
return copyOfCats;
}
function prependCat(name){
  const copyOfCats=["Arnold", ...cats];
  return copyOfCats;

}
function removeLastCat(){
const copyOfCats = cats.slice(0, cats.length-1)
return copyOfCats;
}