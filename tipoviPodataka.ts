//Primitivni tipovi

let godine:number=25;
let ime:string="Saska";
let studira:boolean=true;

//Nizovi

let predmeti:string[]=["EPOS","Klijentkse","CLOUD"]; //niz stringova

let ocene:number[]=[10,9,8]; // niz brojeva


// Tuples

let tuple:[string,number]=["Saska",25];

//Enum

enum Modul{
    TehnologijeElektroskogPoslovanja,
    SoftverskoInzenjerstvo,
    InformacioniSistemi
}

let modul:Modul=Modul.TehnologijeElektroskogPoslovanja;

//Objekti

let student:{ime:string,godine:number,studira:boolean}={
    ime:"Danica",
    godine:24,
    studira:true
};

//Unija tipova

let brojIliString:number | string =10;

// Any tip

let biloKojiTip:any="Moze biti bilo koji tip";

// void tip

function cao():void{
    console.log("cao");
}

// null i undefined

let n:null=null;
let u:undefined=undefined;

// Type Assertions 

let nekaVrednost:any="Neki string";
let duzinaStringa:number=(nekaVrednost as String).length;

console.log("Duzina stringa je: ",duzinaStringa);
console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n,u);





