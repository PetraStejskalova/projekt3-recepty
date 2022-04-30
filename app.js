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

recepty.forEach(pridejPoradi);
function pridejPoradi(recept, index) {
  recept.poradi = index;
  return recept;
}

// zobrazeni posledniho prohlizeneho receptu pri nacteni
let aktualniReceptStorage = localStorage.getItem('aktualniRecept');
if (aktualniReceptStorage !== null) {
  zobrazReceptDetail(Number(aktualniReceptStorage));
}

zobrazSeznamReceptu(nalezeneRecepty);

// filtr hledani
let hledanyRecept = document.getElementById('hledat');
hledanyRecept.addEventListener('keydown', () => {
  najdiRecept(hledanyRecept.value);
});

function najdiRecept() {
  let vyhledaneRecepty = recepty.filter(recept => recept.nadpis.toLowerCase().includes(hledanyRecept.value));

  zobrazSeznamReceptu(vyhledaneRecepty);
}

// filtr kategorie
let filtrovaniElement = document.getElementById('kategorie');
filtrovaniElement.addEventListener('change', () => {
  vyfiltrujRecepty();
});

function vyfiltrujRecepty() {
  let vyfiltrovaneRecepty = recepty.filter(recept => recept.kategorie.includes(filtrovaniElement.value));

  zobrazSeznamReceptu(vyfiltrovaneRecepty);
}

// razeni dle hodnoceni
let razeniElement = document.getElementById('razeni');
razeniElement.addEventListener('change', () => {
  seradRecepty();
});

function seradRecepty() {
  let razeniElement = document.getElementById('razeni');

  if (razeniElement.value == 1) {

    let serazeneReceptyOdNejlepsiho = recepty.sort((a, b) => {
      if (a.hodnoceni < b.hodnoceni) {
        return 1;
      } else {
        return -1
      }
    })
    zobrazSeznamReceptu(serazeneReceptyOdNejlepsiho);

  } else if (razeniElement.value == 2) {

    let serazeneReceptyOdNejhorsiho = recepty.sort((a, b) => {
      if (a.hodnoceni > b.hodnoceni) {
        return 1;
      } else {
        return -1
      }
    })
    zobrazSeznamReceptu(serazeneReceptyOdNejhorsiho);

  } else {
    let puvodniPoradi = recepty.sort((a, b) => {
      if (a.poradi > b.poradi) {
        return 1;
      } else {
        return -1
      }
    })
    zobrazSeznamReceptu(puvodniPoradi);
  };

}

// zobrazeni seznamu receptu
function zobrazSeznamReceptu(recepty) {
  let seznamReceptu = document.getElementById('recepty');
  seznamReceptu.innerHTML = '';

  recepty.forEach((recept, index) => {
    let receptElement = zobrazReceptMenu(recept, index);
    seznamReceptu.appendChild(receptElement);
  })
}

// zobrazeni detailu receptu
function zobrazReceptDetail(index) {
  let aktualniRecept = recepty[index];
  let receptFoto = document.getElementById('recept-foto');
  receptFoto.src = aktualniRecept.img;
  receptFoto.alt = 'Foto receptu';

  let receptKategorie = document.getElementById('recept-kategorie');
  receptKategorie.textContent = aktualniRecept.kategorie;

  let receptHodnoceni = document.getElementById('recept-hodnoceni');
  receptHodnoceni.textContent = aktualniRecept.hodnoceni;

  let receptNazev = document.getElementById('recept-nazev');
  receptNazev.textContent = aktualniRecept.nadpis;

  let receptPopis = document.getElementById('recept-popis');
  receptPopis.textContent = aktualniRecept.popis;

  localStorage.setItem('aktualniRecept', index);
}

// zobrazeni receptu
function zobrazReceptMenu(recept, index) {
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
  receptElement.dataset.poradi = index;
  receptElement.appendChild(receptObrazek);
  receptElement.appendChild(receptInfo);

  receptElement.addEventListener('click', () => {
    zobrazReceptDetail(index);
  });

  return receptElement;
}
