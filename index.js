function ruleaza() {
  const text = document.getElementById("input").value;
  let cuvinte = text.split("\n").filter(x => x.trim() !== "");

  // sortare alfabetică (ca strcmp)
  cuvinte.sort((a, b) => a.localeCompare(b));

  let rezultat = "";
  let curent = "";

  for (let cuv of cuvinte) {
    if (cuv[0].toLowerCase() !== curent.toLowerCase()) {
      curent = cuv[0];
      rezultat += `\n--- Categorie ${curent} ---\n`;
    }
    rezultat += cuv + "\n";
  }

  document.getElementById("output").textContent = rezultat;
}
