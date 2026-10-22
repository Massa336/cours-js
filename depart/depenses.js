const nom = 'Awa'; // Type : string
const budget = 30000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transport = Number(transportTexte);
const alimentation = Number(alimentationTexte);
const loisirs = Number(loisirsTexte);
// TODO : calculez le total, le budget restant et budgetRespected.
const totalDepenses = transport + alimentation + loisirs;
const budgetRestant = budget - totalDepenses;
const budgetRespected = budgetRestant >= 0;
// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log("Bilan de" + nom );
console.log("budget :" + budget + "FCFA ");
console.log("trasport :"  + transport + "FCFA");
console.log("alimentation :" + alimentation + "FCFA");
console.log("loisirs :" + loisirs+  "FCFA ");
console.log("totaldepenses :" + totalDepenses + "FCFA");
console.log("budget restant :" + budgetRestant + "FCFA");
console.log("budget respecte :" + budgetRespected );


