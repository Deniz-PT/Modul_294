let name = prompt("wie heissen Sie?");
var now = new Date();
var hour = now.getHours();

if (hour < 10) {
  alert(`Guten Morgen ${name}`);
}
