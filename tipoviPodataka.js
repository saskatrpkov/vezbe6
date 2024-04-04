//Primitivni tipovi
var godine = 25;
var ime = "Saska";
var studira = true;
//Nizovi
var predmeti = ["EPOS", "Klijentkse", "CLOUD"]; //niz stringova
var ocene = [10, 9, 8]; // niz brojeva
// Tuples
var tuple = ["Saska", 25];
//Enum
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektroskogPoslovanja"] = 0] = "TehnologijeElektroskogPoslovanja";
    Modul[Modul["SoftverskoInzenjerstvo"] = 1] = "SoftverskoInzenjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElektroskogPoslovanja;
//Objekti
var student = {
    ime: "Danica",
    godine: 24,
    studira: true
};
//Unija tipova
var brojIliString = 10;
// Any tip
var biloKojiTip = "Moze biti bilo koji tip";
// void tip
function cao() {
    console.log("cao");
}
// null i undefined
var n = null;
var u = undefined;
// Type Assertions 
var nekaVrednost = "Neki string";
var duzinaStringa = nekaVrednost.length;
console.log("Duzina stringa je: ", duzinaStringa);
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n, u);
