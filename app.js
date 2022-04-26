/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

let nalezeneRecepty = recepty;

zobrazSeznamReceptu();

// zobrazeni seznamu receptu
function zobrazSeznamReceptu() {
    let seznamReceptu = document.getElementById('recepty');

    nalezeneRecepty.forEach((recept) => {
        let receptElement = zobrazReceptMenu(recept);
        seznamReceptu.appendChild(receptElement);
    })

}

// zobrazeni detailu receptu
function zobrazReceptDetail(recept) {
}

// zobrazeni receptu
function zobrazReceptMenu(recept) {
    let info = document.createElement('h3');
    info.innerHTML = recept.nadpis;

    let receptInfo = document.createElement('div');
    receptInfo.classList.add('recept-info');
    receptInfo.appendChild(info);

    let obrazek = document.createElement('img');
    obrazek.src = recept.img;
    obrazek.alt = 'Obrazek';

    let receptObrazek = document.createElement('div');
    receptObrazek.classList.add('recept-obrazek');
    receptObrazek.appendChild(obrazek);

    let receptElement = document.createElement('div');
    receptElement.classList.add('recept');
    receptElement.appendChild(receptObrazek);
    receptElement.appendChild(receptInfo);

    receptElement.addEventListener('click', zobrazReceptDetail(recept));
    return receptElement;
}





/* 
let i = 0;

zobrazRecepty();

// zobrazeni seznamu receptu
function zobrazRecepty() {
  let seznam
}



recept.addEventListener('click', zobrazReceptDetail(recept))
return recept
}

function obrazReceptDetail

// hledani receptu
let hledanyReceptIndex;

function hledejRecept() {
  let hledani = document.querySelector('#hledat').value;
  console.log(hledani);

  for (let i = 0; i < recepty.length; i++) {
    if (hledani === recepty[i].nadpis) {

      zobrazRecept();
    }
  }
}

document.querySelectorAll('input').forEach((element) => {
  element.addEventListener('keydown', hledejRecept);
});

// filtrovani dle kategorie
let kategorie = document.getElementById('kategorie');

kategorie.addEventListener('change', (event) => {
  let vybranaKategorie = event.target.value;
  console.log(vybranaKategorie);
  zobrazKategorii()
});

recepty.filter(zobrazKategorii);

function zobrazKategorii() {
  if (recepty.kategorie === 'Snídaně') {
    return true;
  } else {
    return false;
  }
}

// razeni dle hodnoceni

recepty.hodnoceni.sort(porovnej);

function porovnej(cis1, cis2) {
  if (cis1 > cis2) {
    return 1;
  } else {
    return -1;
  }
};

console.log(recepty);
 */