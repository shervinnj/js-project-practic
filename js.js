
//+++++++++++++++++++++++++++++++++++++++++++++
let pageBanner=document.getElementById
("page-banner");
// barayeh dastresi be elementhayeh ba tag id

//++++++++++++++++++++++++++++++++++++++++++++++++++
let title=document.getElementsByClassName
("title");
// barayeh dastresi be elementhayi ke class daran
let li=document.getElementsByTagName
('li');
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
qSelector=document.querySelectorAll
('#book-list li .name')[1];
console.log(qSelector);

//barayeh emtekham zir majmoeyeh li estefadeh mishe make sure we put indeh out the perantecy 

