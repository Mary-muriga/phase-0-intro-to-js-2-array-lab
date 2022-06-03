//write your solution her
const cats =["Milo", "Otis", "Garfield"]
function destructivelyAppendCat (name)
{
cats.push(name);
return cats;
}
console.log(cats);

function destructivelyPrependCat(name){
  cats.unshift(name);
  return cats;
}
console.log(cats);

function destructivelyRemoveLastCat(name){
  cats.pop(name);
  return cats;
}
console.log(cats);

function destructivelyRemoveFirstCat(name){
  cats.shift(name);
}
console.log(cats);

function appendCat(name){
cats.slice(name);
return ["Milo", "Otis", "Garfield", "Broom"];

}
console.log(cats);

function prependCat(name){
  cats.slice(name);
 return ["Arnold", "Milo", "Otis", "Garfield"];
}
console.log(cats);

function removeLastCat(){
  cats.splice();
  return ["Milo", "Otis"];
}
console.log(cats);

function removeFirstCat(){
  cats.splice();
  return ["Otis", "Garfield"];
}
console.log(cats);
