
//+++++++++++++++++++++++++++++++++++++++++++++
let pageBanner=document.getElementById
("page-banner");
// barayeh dastresi be elementhayeh ba tag id

//++++++++++++++++++++++++++++++++++++++++++++++++++
let title=document.getElementsByClassName
("title");
// barayeh dastresi be elementhayi ke class daran
// let li=document.getElementsByTagName
// ('li');
//barayeh dastresi be elementhayei ke tag daran masalan li 
//+++++++++++++++++++++++++++++++++++++++++++++++++
// for(let element of li){
//     console.log(element);
// }
// console.log(li[1]);

// hame li mirim toosh batam migireh ba for va index mizaram ke begham kodoom li agar biroon
//+++++++++++++++++++++++++++++++++++++++++
let qSelector= document.querySelector
('#page-banner');

// hamoon kaaro anjam mideh hamm barayeh class ham barayeh id

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
 qSelector= document.querySelectorAll
('.title');


//+++++++++++++++++++++++++++++++++++++++++++++++++
// qSelector=document.querySelectorAll
// ('#book-list li .name')[1];
// console.log(qSelector);

//barayeh emtekham zir majmoeyeh li estefadeh mishe make sure we put indeh out the perantecy 

// let li=document.querySelector
// ('li');


// let result;

// result=li.children[1];

// console.log(result);

//dar mesaleh balah ma faghat tag li entekhab kardim
//va farzandeh avalesho entekhab kardim yani 
//zir majmoe li na ul 

// let ul=document.querySelector
// ('ul');

// let hame;
// hame=ul.children[2].children[0]

// console.log(hame);

// dar mesaleh balah ma ul entekhab kardim 
// bad farzandesho entekhab kardim ke li hast
// bad dobareh az ye childeren digeh estefadeh kardim
//barayeh farzandeh li

//++++++++++++++++++O R +++++++++++++++++++++

//  let ul=document.querySelector
//  ('ul').children[1].children[0].innerHTML;


//  console.log(ul);

 // estefadeh az innerHTML barayeh entekhab tex faezand

 //++++++++++++++++++++++++++++++++++++++++

//  let ul=document.querySelector
//  ('ul').firstElementChild;

//  ul=document.querySelector('ul').lastElementChild;

//  console.log(ul);


 //ba estefadeh az dastoor ba bacheyeh aval 
 // va bacheyeh akharo entekhab kardim

// let ul=document.querySelector
// ('ul').childElementCount;
// console.log(ul);

//ba estefadeh az in dastoore ma mitoonim peyda konim
//chanta faarzand dareh tagemoom

//+++++++++++++++++++++++++++++++++++++++++++++
let li=document.querySelector('li').parentElement;
console.log(li);

//ba estefadeh az parentElement ma mitoonim be pedareh li dastresi dashte bashim








 