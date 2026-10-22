let recette = 0;
let billetsmoins16 = 0;
let billetsplus16 = 0;
let billetsR = 0;
for (let age = 11; age <= 20; age++) {
    let prix;
    if (age<16) {
        prix = 1500;
        billetsmoins16++;
    } else {
        prix = 2500;
        billetsplus16++;
    }
    if (age>=18) {
        prix -= 500;
        billetsR++;

    }
    recette += prix;
    console.log(" age : " + age + " ans , prix : " + prix + "FCFA");
}

    console.log(" recette totale :" + recette + "FCFA");
    console.log(" billets à 1500 FCFA :" + billetsmoins16);
    console.log(" billets à 2500 FCFA : " +billetsplus16);
    console.log(" billets avec reduction : " +billetsR);