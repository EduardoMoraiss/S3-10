let competidores = [];
function positions(firstPlace, secondPlace, lastPlace) {
  if (lastPlace === "Daniel") {
    competidores.push(
      `1 - Colocado: ${firstPlace} 2 - Colocado: ${lastPlace} 3 - Colocado: ${secondPlace}`
    );
  }
  return competidores;
}
console.log(positions("Rafael", "Manoel", "Daniel"));
