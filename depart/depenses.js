const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transportNumber = Number(transportTexte);
const alimentationNumber = Number(alimentationTexte);
const loisirsNumber = Number(loisirsTexte);
// TODO : calculez le total, le budget restant et budgetRespected.
onsole.log(Number(transportTexte)+Number(alimentationTexte)+Number(loisirsTexte));
console.log(budget-(Number(transportTexte)+Number(alimentationTexte)+Number(loisirsTexte)));
console.log(budget>(Number(transportTexte)+Number(alimentationTexte)+Number(loisirsTexte)));


const Variationnom = 'Awa'; // Type : string
const VariationBudget = 30000; // Type : number ; unité : FCFA
const VariationtransportTexte = '12500'; // Type : string ; unité : FCFA
const VariationalimentationTexte = '18300'; // Type : string ; unité : FCFA
const VariationloisirsTexte = '7500'; // Type : string ; unité : FCFA

const VariationtransportNuber = Number(VariationtransportTexte);
const VariationalimentationNumber = Number(VariationalimentationTexte);
const VariationloisirsNumber = Number(VariationloisirsTexte);
console.log(Number(VariationtransportTexte)+Number(VariationalimentationTexte)+Number(VariationloisirsTexte));
console.log(VariationBudget-(Number(VariationtransportTexte)+Number(VariationalimentationTexte)+Number(VariationloisirsTexte)));
console.log(VariationBudget>(Number(VariationtransportTexte)+Number(VariationalimentationTexte)+Number(VariationloisirsTexte)));