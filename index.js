let array = [" Rafael ", " Manoel ", " Daniel "];
function positions(firstPlace, secondPlace, lastPlace) {
  if (lastPlace === " Daniel ") {
    console.log(
      " 1 - Colocado:" +
        firstPlace +
        " 2 - Colocado:" +
        lastPlace +
        " 3 - Colocado:" +
        secondPlace
    );
  } else if (secondPlace === " Daniel ") {
    console.log(
      " 1 - Colocado:" +
        secondPlace +
        " 2 - Colocado:" +
        firstPlace +
        " 3 - Colocado:" +
        lastPlace
    );
  } else {
    console.log(
      " 1 - Colocado:" +
        firstPlace +
        " 2 - Colocado:" +
        secondPlace +
        " 3 - Colocado:" +
        lastPlace
    );
  }
}
console.log(positions(" Daniel ", " Rafael ", " Manoel "));
