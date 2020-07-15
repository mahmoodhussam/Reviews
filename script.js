
// Information About People


var LIST = [{
	img: "./imges/person1.jpg",
	name: 'Abbas Ali'  ,
	job: 'BACK-END DEVELOPER',
	info: "The curriculum was aligned with what I wanted to study. The assignments are specific to the industry I’m in. I was able to develop new language translation tools for my company." 

},
{
	img: "./imges/person2.jpeg",
	name: 'HUSSAM Mohammed'  ,
	job: 'UX DESIGN',
	info: "One of the things that attracted me to Udacity was a curriculum developed by people that worked for some of the biggest and most successful tech companies." 



},
{
	img: "./imges/person3.jpg",
	name: 'Zaid Hodrob'  ,
	job: 'ANDROID DEVELOPER',
	info:'I was a commerce student and wanted to change my career to developing for Android. Udacity helped me learn the everything I needed to become an Android developer starting from basics to expert level.'
},
{
	img: "./imges/person4.jpg",
	name: 'MAHMOUD HUSSAM'  ,
	job: 'FORNT-END DEVELOPER',
	info:'Udacity helped me get a job as an Android UI developer after two years of small gigs in delis, shoveling snow, and fixing used refrigerators'
}

];

// select element by ID

const img = document.getElementById('person-img');
const name = document.getElementById('person-name');
const job = document.getElementById('person-job');
const info = document.getElementById('person-info');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');


// defined position
let currentItem = 0;

// show the first person
window.addEventListener('DOMContentLoaded',function(){
	showPerson();
});

// show the next person 
nextBtn.addEventListener('click',function(){
	currentItem++;
	if(currentItem > LIST.length - 1){
		currentItem = 0 ;
	}
	showPerson();
});

// show the perv person

prevBtn.addEventListener('click',function(){
	currentItem--;
	if(currentItem < 0){
		currentItem = LIST.length - 1 ;
	}
	showPerson();
});

// show function 


function showPerson() {
	// body...
	img.src = LIST[currentItem].img;
	name.innerText = LIST[currentItem].name; 
	job.innerText = LIST[currentItem].job;
	info.innerText = LIST[currentItem].info;

}

