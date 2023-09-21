const obj = {
    person : "esakki",
    friends : {
    person : "guvi"
},
}
// there are two types to get the result
//=======> dot method
console.log(obj.person); //====> this is dot method 
console.log(obj.friends.person);
//=======> map mathod
console.log(obj["person"]); //map method la stringla than podanum
console.log(obj["friends"]["person"]);
console.log(obj.friends["person"]); // intha method-um use pannalam
//dot-la epdi multible task poduromo , same like map methodla-um podalam
 
// array-la epdi use pannuvom apdina index value kuduthu use pannuvom
//ex
const arr = [1, 2, 3, [4, 5], 6]; //ippadi iruntha
console.log(arr[3][0]);
// ipdi index value kuduthu edukkanum


// ithuve for in kuduthom appdina 

for (key in obj){
    console.log(key);
    console.log(obj[key]);
}
//----------------------------------------------------------------

// baic car making object

 const carObject = {
    name : "virtus",
    engine : "1 lliter",
    seat : "lether",
    variant : "petrol",
    length : "above 4 meter",

    makeWheel : function () {
        console.log("making wheel")
    },

    makechase : function () {
    console.log("making chase of length", carObject.length);
    },

    startProduction : function () {
        carObject.makeWheel();
        carObject.makechase();
    },
}
console.log(carObject);
carObject.startProduction();

//factory method 
//car production mathiri oru factory method create pannittu athula multible object use pannikkalam
//factory method retruns an object
// example========>
function manufactureCar(name, engineSpec, seat, variant ){
    return { //  factory method objectah return pannum; 
        name : name,
        engineSpec : engineSpec,
        seat : seat,
        variant : variant,
    };
}
// oru functionah oru variableah call panna mudium... fuctions are first class functions so nammalala panna mudium...
// intha car-kku manufactureFunction apdinguratha namma call panna porom
const virtus = manufactureCar("virtus", "1", "4 seat leather", "petrol");
console.log(virtus);
//virtus-kku oru name pottu manufactureCar-nu kudutha mathiri vendo-nu innoru name kuduthu athe manufacture carah again call panni vento-kku yetha mathiri object change pannuna result will come 
//example
const vento = manufactureCar("vento", "1.5", "4 foam seat", "diesel");
console.log(vento);
// result will come inn vento spec

// short hand property
//key-um variable value-vum ore namela irunthucunano need to use two different things
// example
const data1 = "sample data";
const sampleObj = {
     //data1: data1,
     //key  : variable name
     //key-um variable value-vum ore namela irunthucunano oru nameah use pannuna pothum
    data1,
};
console.log("sampleObj.......", sampleObj);
// this is called short hand proberty
// so intha short hand probertyah factory functionla(manufacture car) use panna mudium
//example
function manufactureCar(name, engineSpec, seat, variant ){
    return { //  factory method objectah return pannum; 
        name,  //name, one time use pannuna pothum
        engineSpec,  //engineSpec, one time use enough
        seat,  //seat, one time use enough
        variant //variant, one time use enough
    };
}
//const virtus = manufactureCar("virtus", "1", "4 seat leather", "petrol");
//console.log(virtus);
// console pannuna same 71st linela kedacha athe ans than kedaikkum
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// return { //  factory method objectah return pannum; 
//     name,  //name, one time use pannuna pothum
//     engineSpec,  //engineSpec, one time use enough
//     seat,  //seat, one time use enough
//     variant, //variant, one time use enough
//     // ipo ithoda oru function create pannalam
//     startManufacturing : function () {
//     console.log( 
//     `
//     starting manufacturing ${name},
//     creating a engine of ${engine spec} liter and variant
//     creating a body for ${name},
//     attaching seats of type ${seat},
//     completed the chase of car ${name}

//     `
//     );
//     }
// }
// }
/////////////////////////////////////////////////////////////////////////////////
// ore factory_kula specifications mattum maathikkuren 

//this keyword(this immediate parent object)

const fatherObj = {
    house : "father house",
    car : "father car",
    campany : "father company",
    getProperty : function() {
        console.log(this); // intha this-oda immediate parent (fatherObj) than/ function apdingurathu method 
    },
    getHouseName: function () {
        console.log(this);
    }

};
fatherObj.getProperty(); // getproperty-ah call pannuna (this call aagum);antha this kulla than fatherObj irukku
// ella object inforationah_um this-ah la accecs panna mudium
fatherObj.getHouseName();

const grandFatherobj = {
    house : "grandFther house",
    getHouse : function () {
        console.log(this.house);
    },
    fatherObj: {
        house :" father house",
        //in normal function this targets immediate parent object
        getHouse : function() {
            console.log(this.house);
        },
        //in arrow function this always targets global object(window)
        getDetails: () => {
            console.log(this);
            //oru arrow functionkulla this-ah call pannuna athu window(global object ah) than target pannum 
        },
    },
};
grandFatherobj.getHouse();
grandFatherobj.fatherObj.getHouse();
grandFatherobj.fatherObj.getDetails();
// athavathu this eppaime immediate parentah than target pannum, 
 
console.log(this);// ithu global object la excute aagum, windowla nadakkum because window is the global object
console.log(window);// same process

// constructor functions 
// its creates a object , namma create panna vendam athukku pathila athuve create panni kudukkum

function ManufactureCar(name, seat, engine, variant) { // ippadi capital letterla statr pannuna athu than constructor function
    this.name = name;
    this.seat = seat;
    this.engine = engine;
    this.variant = variant;
    this.power = engine*100;
    // ipo intha power enakku venum apdina this.powerla irunthuthan edukka mudium atha parametresla irunthu edukka mudiyathu
    // example 189th line 
    // eppaume objctla irunthu edukkurathu than correct process
    this.carDetails = function(){
        console.log(`
        Name of the car is ${this.name}
        No of seats ${this.seats}
        Engine capacity ${this.name} 1litre
        variant of the car is ${this.variant}
        Hourse power is ${this.power}BHP
        `);
    }
}

const passat = new ManufactureCar("passat", 4, 2, "petrol");
console.log(passat);

// constructre function appadinna new apdinnu keyword create pannanum
// new key word kudutha athu constructor function
// new apdinu keyword kudutha enna nadakkum apdina new objectah {} create  pannum
// intha ManufactureCar apdingura functionkku new object create pannum
// ipo this apdingurathu immediate parrent objectah target pannum, ipo ithoda immediate parent objcet ethu apdinna intha manufacture car than
// ne apdingurathu puthu objectla so athu emptyah than irukkum
// example
// const manufac = {

// }
// console.log(manufac);
// ipo intha empty objectla ethavathu add pandrom apdinna 
// example
// const manufac = {

// }
// manufac.name = "manufacture"
// console.log(manufac)
// object usually copy the address

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// WHAT IS PROTOTYPE METHOD
// EXAMPLSE
ManufactureCar.prototype.getNameofCar = function () {
    console.log(this.name);
}
passat.getNameofCar();
// namma programkku nammala onnu add pannanumnu nenacha athan prtotype..

// class in js///////////////////////////////////////////////////////////////////
// how to u defind the class 
//keyword ; class 
class CarProduction {
    // encapsulation ==> car 1 polo-nu irukkum pothu ennala ipo car 2 apdinu onna create pannikka mudiumla athan encapsulation
    constructor(name, color, fuelVariant, engineCapacity){
        //this = {}
        this.name = name; // this.name =polo
        // this = {name : polo}
        this.color = color;
        this.fuelVariant = fuelVariant;
        this.engineCapacity = engineCapacity;
    }
    // ithukku apram enna pannanum appadina business logic or methods eluthanum 
    getDetails() {
        console.log(`
        name : ${this.name}
        color : ${this.color}
        fuelType : ${this.fuelVariant}
        EngineCapacity : ${this.engineCapacity}liter
     `);
    }
    //polymorphism
    // getSpecialDetails() {
    //     console.log(`special details are ${this.fuelVariant}engine`);
    // }
}
// step 1  ====>car production eluthirukkom,
// step 2 ====>then, constructoe eluthirukkom get details apdinguratha eluthirukkom
// now how to involk this class..?
// enna keyword kudutha constructor puthu objectah return pannum ...? ans is (new) keyword
const car1 = new CarProduction("polo", "red", "diesel", 1.5);
console.log(car1);
car1.getDetails();

// 4 pillars of oops
// Encapsulation ===> (ability to define a data with methods)oru eadathula oru datavukkana objectah eluthi atha ethana eadathula venumnalum use pannikka mudium athan encapsulation example==> 231st line
// Inhertiance ===> 
// Absraction ===> 
// Polymorphism

/////inheritance 

class Features extends CarProduction {
    constructor(
        name, 
        Color, 
        fuelVariant, 
        engineCapacity, 
        safety, 
        model, 
        seatType,
        Type, 
    ) {
        super(name, Color, fuelVariant, engineCapacity);
        // super constructor data apply pandarthunala athukku thaniya data elutha vendam athu automatically car production datava attach pannirum
        this._safety = safety;
        this.model = model;
        this.Type = Type;
        this.seatType = this.seatType;
    }
    // geter method
get safety() {
    return this._safety;
}
//setter method 
set safety(newStarRating){
    if (newStarRating < 0){
        console.log("Error : star rating cannot be less than 0");
    }   else if (newStarRating > 5){
        console.log("Error : star rating cannot be greter than 5");
    }   else {
        this._safety = newStarRating;
    }
}
    getCarFeatures(){
        // abstaction... 
        let bhb = (this.engineCapacity * 100) /1.8 // intha functional calculationah ennala change panna mudiyathu this is called unstarction
        console.log(`
            Star Ratings : ${this.safety}
            Model : ${this.model}
            Seats : ${this.seatType} seats
            CarBody type : ${this.type}
            BHB : ${bhb.toFixed(1)}BHB
        `);
    }
    // plymorphism///////////
    getSpecialDetils(){
        console.log(`special dtails are ${this.seatType}seats`);
    }
}
const car2 = new Features("tigun", "grey", "petrol, 4");
const car3 = new Features(
"jetta",
 "grey", 
 "petrol", 
 4, 
 5,
 "topline",
 "suv", 
 "leater");
console.log(car3);
car3.getDetails();  
car3.bhb = 400; // cannot change do this
car3.getCarFeatures(); // abstarctions
// features-la mattum changes update pannanumna inheritance methodla pannikkalam 
// super oru constructor than
// super constructor enna velai paakkum apdina already irukkura constructorah replace pannum
console.log(car3.safety);
car3.safety = -1; // throw and error
car3.safety = 6; // 
car3.safety = 4; // change to 4
console.log(car3.safety);
//oru data-va paakkurathukum,at the same time ath set pandrathukkum, athu set aacha illayanu check pandrathukkum than setter getter thevai paduthu

// polymorphism
// ore mathiri vishyataha multiblr shpesla nammalala kondu vara mudiumla atha polymorphism
// car3.getSpecialDetails(); // refernce line no : 249
car3.getSpecialDetils(); // refernce line no : 313

