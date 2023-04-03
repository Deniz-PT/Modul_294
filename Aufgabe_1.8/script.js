let randomNum = Math.floor(Math.random() * 100 + 1);

let geschafft = true;

console.log(randomNum);

while (geschafft) {
  let eingabe = parseInt(prompt("geben sie ein Zahl zwischen 1 und 100 ein"));

  if (eingabe === randomNum) {
    alert("Boa krass geschafft!");
    geschafft = false;
  } else if (eingabe > randomNum) {
    alert("die gesuchte Zahl ist kleiner");
  } else if (eingabe < randomNum) {
    alert("die gesuchte Zahl ist grösser");
  }
}
