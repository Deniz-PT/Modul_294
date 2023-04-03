let randomNum = Math.floor(Math.random() * 100 + 1);

let geschafft = false;

console.log(randomNum);

while (geschafft == false) {
  let eingabe = parseInt(prompt("geben sie ein Zahl zwischen 1 und 100 ein"));

  if (eingabe === randomNum) {
    alert("Boa krass geschafft!");
    geschafft = true;
  } else if (eingabe > randomNum) {
    alert("die gesuchte Zahl ist kleiner");
  } else if (eingabe < randomNum) {
    alert("die gesuchte Zahl ist grösser");
  }
}
