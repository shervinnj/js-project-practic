
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
// let li=document.querySelector('li').parentElement;
// console.log(li);

//ba estefadeh az parentElement ma mitoonim be pedareh li dastresi dashte bashim
//+++++++++++++++++++++++++++++++++++\



// let hedding=document.createElement
// ('h1');
// hedding.getAttribute('h1');

// hedding.setAttribute('shervin','nj');


// hedding.className='shervin';
// hedding.innerHTML="shervin";




// console.log(hedding);



// create attribute va class ba estefadeh az crateElement


// let rew=document.createElement('h2');
// rew.getAttribute('h2');
// rew.setAttribute('shervin','shervin');

// let ul=document.createElement('ul');
// let li1=document.createElement('li');
// let li2=document.createElement('li');
// li1.appendChild(document.createTextNode("shervin"));
// li2.appendChild(document.createTextNode('nj'));

// ul.appendChild(li2);
// ul.appendChild(li1);


// rew.appendChild(ul);

// console.log(rew);

//estefadeh az appendChild yani farzandeh khodesh beshe vasl mikonan hamo
//be khodesh man dar mesaleh baleh ul vasl kardam be tag h2



//+++++++++++++++++ OR++++++++++++++++++++//



// let h4=document.createElement('h4');

// h4.innerHTML=(
// `<ul>
// <li>1</li>
// <li>2</li>
// </ul>`

// )

// console.log(h4);

//in ba mesaleh balah hich farghi nadareh

//+++++++++++++++++++++++++++++++++++++++++++++++++

let newheading=document.createElement('h1');

newheading.className='title';
newheading.innerHTML="shervin";


let oldheading=document.querySelectorAll('.title')[1];
let parents=document.querySelector('#book-list');


parents.replaceChild(newheading,oldheading);


//ma aval miyayim migim kojaro replace konim va sepas tageh father entekhab mikonim
//va dar line akhar be father migim bia replace kon in jadidaro ba ghadimiyeh



let newrow=document.createElement('h1');
newrow.className='title';
newrow.innerHTML='asghar';

let oldrow=document.querySelectorAll('.title')[0];

let father=document.querySelector('#page-banner');

father.replaceChild(newrow,oldrow);
console.log(oldrow);


let newelm=document.createElement('span');
newelm.className='name';
newelm.innerHTML='naser';

let oldelm=document.querySelectorAll('.name')[0];

let popt=document.querySelector('li');
popt.replaceChild(newelm,oldelm);

console.log(popt);

//dar dastooreh balah ma yad gereftim ke hatachetor 
//be zir shakhehayeh li ham jaygozin konim