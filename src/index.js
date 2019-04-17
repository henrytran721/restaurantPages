import {appendFrame} from "./baseFrame"
import {createTabs} from "./tabs"
import {aboutTab} from "./aboutTab"
import {menuTab} from "./menuTab"
import {contactTab} from "./contactTab"

const content = document.querySelector(".content");
appendFrame(content);
content.appendChild(createTabs());


//Create the tabs
let mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
content.appendChild(mainDiv);

let aboutBtn = document.querySelector('.about');
let menuBtn = document.querySelector('.menu');
let contactBtn = document.querySelector('.contact');

//Default About Delegation
if(aboutBtn.classList.contains('active')){
  mainDiv.appendChild(aboutTab());
}

function switchTabs(firstBtn, secondBtn, selectedBtn, selectedTab){
  firstBtn.classList.remove('active');
  secondBtn.classList.remove('active');
  selectedBtn.classList.add('active');
  mainDiv.innerHTML = "";
  mainDiv.appendChild(selectedTab);
}

menuBtn.addEventListener('click', function(){
  switchTabs(aboutBtn, contactBtn, menuBtn, menuTab())
});
aboutBtn.addEventListener('click', function(){
  switchTabs(menuBtn, contactBtn, aboutBtn, aboutTab())
});
contactBtn.addEventListener('click', function(){
  switchTabs(menuBtn, aboutBtn, contactBtn, contactTab())}
);
