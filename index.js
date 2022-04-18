function positions(firstPlace, secondPlace, lastPlace) {
  let competidores = [];
  if (lastPlace === "Daniel") {
    competidores.push(
      `1 - Colocado: ${firstPlace} 2 - Colocado: ${lastPlace} 3 - Colocado: ${secondPlace}`
    );
  } else if (secondPlace === "Daniel") {
    competidores.push(
      `1 - Colocado: ${secondPlace} 2 - Colocado: ${firstPlace} 3 - Colocado: ${lastPlace}`
    );
  } else {
    competidores.push(
      `1 - Colocado: ${firstPlace} 2 - Colocado: ${secondPlace} 3 - Colocado: ${lastPlace}`
    );
  }
  return competidores;
}
console.log(positions("Daniel", "Rafael", "Manoel"));
