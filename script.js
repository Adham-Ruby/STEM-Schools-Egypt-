// JS code for navBars

var menu = document.querySelector('#menu'),
slideUpNav = document.querySelector('.slideNav') ;
var content = document.querySelector('#content');
var theList = document.querySelector('#theList');
var click = 1;
var downArrow = document.querySelector('.downArrow');
const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');

var w = window.innerWidth;
console.log(w);



    function openMenu1(){
        if(w >= 2100){
            menu.style.width = '500px';
            content.style.marginLeft = '300px';
            openMenu.classList.remove('appear');
            openMenu.classList.add('diappear');   
        } else{
            menu.style.width = '300px';
            content.style.marginLeft = '300px';
            openMenu.classList.remove('appear');
            openMenu.classList.add('diappear');
        }
    }



function closeMenu1(){
    menu.style.width = '0';
    content.style.marginLeft = '0';
    openMenu.classList.add('appear');
}

function list1(){
    click ++;
    if (click % 2 == 0) {
    theList.style.transition = 'all .6s ease 0s';
    downArrow.style.transform = 'rotate(180deg)';
    theList.classList.remove('schoolsList');
    theList.classList.add('theListItems');
 } else {
    theList.style.transition = 'all .6s ease 0s';
    downArrow.style.transform = 'rotate(360deg)';
    theList.classList.remove('theListItems');
    theList.classList.add('schoolsList');
 }
}

// JS code for paragraphs

var box = document.querySelectorAll('.box'),
upperNav = document.querySelector('#upperNav'),
p = document.querySelectorAll('.paragraph');

function appearBox() {
    box[0].style.visibility = 'visible';
    box[0].style.transition = 'all 1s ease-in-out 0s';
    box[0].style.transform = 'translateY(0px)';    
}
setTimeout(appearBox(), 3000);

function appearUpperNav(){
upperNav.style.transform = 'translateY(80px)';
upperNav.style.transition = 'all .8s ease-in-out 0s';
}
setTimeout(appearUpperNav(), 2000);

// JS code for the content slider

const contentSlider = document.querySelector('.contentSlider');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
const indicatorParents = document.querySelector('.contentControls ul');
var secctionIndex = 0;

var pointsContControls = document.querySelectorAll('.contentControls li');

pointsContControls[0].addEventListener('click', function(){
    secctionIndex = 0;
    document.querySelector('.contentControls .selected').classList.remove('selected');
    pointsContControls[0].classList.add('selected');    
    contentSlider.style.transform = 'translate(' + (secctionIndex) * -25+ '%)';
});   

pointsContControls[1].addEventListener('click', function(){
    secctionIndex = 1;
    document.querySelector('.contentControls .selected').classList.remove('selected');
    pointsContControls[1].classList.add('selected');    
    contentSlider.style.transform = 'translate(' + (secctionIndex) * -25+ '%)';
});

pointsContControls[2].addEventListener('click', function(){
    secctionIndex = 2;
    document.querySelector('.contentControls .selected').classList.remove('selected');
    pointsContControls[2].classList.add('selected');    
    contentSlider.style.transform = 'translate(' + (secctionIndex) * -25+ '%)';
});

pointsContControls[3].addEventListener('click', function(){
    secctionIndex = 3;
    document.querySelector('.contentControls .selected').classList.remove('selected');
    pointsContControls[3].classList.add('selected');    
    contentSlider.style.transform = 'translate(' +  (secctionIndex) * -25+ '%)';
});




function clickRight(){
secctionIndex = (secctionIndex < 3) ? secctionIndex + 1 : 3;
indicatorParents.children[secctionIndex - 1].classList.remove('selected');
indicatorParents.children[secctionIndex].classList.add('selected');
contentSlider.style.transform = 'translate(' + (secctionIndex) * -25+ '%)';
}

function clickLeft(){
    secctionIndex = (secctionIndex > 0) ? secctionIndex - 1 : 0;
    indicatorParents.children[secctionIndex + 1].classList.remove('selected');
    indicatorParents.children[secctionIndex].classList.add('selected');
    contentSlider.style.transform = 'translate(' + (secctionIndex) * -25+ '%)';
}

// JS Code for back-to-top button

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

console.log(height);

var btt = document.getElementById('back-to-top'),
offset = 400,
scrollPos;

if (height != undefined) {
    offset = height / 2.5;
}

console.log(offset);

window.addEventListener("scroll", function(event){

scrollPos = body.scrollTop || html.scrollTop;
btt.className = (scrollPos > offset) ? "visible" : "";

});

btt.addEventListener("click", function(event){  
document.documentElement.scrollTop = 0;
});

//JS Hello Message

var alert = document.querySelector('.alert'),
alertClose = document.querySelector('.alertClose');


window.addEventListener('load', function(){
alert.classList.remove('hide');
alert.classList.add('show');
setTimeout(function(){
    alert.classList.remove('show');
    alert.classList.add('close');
},5000);
});

alertClose.addEventListener('click', function(){
alert.classList.remove('show');
alert.classList.add('close');
});
