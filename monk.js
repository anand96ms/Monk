var slideIndex = 1;
var body = document.querySelector("body");
var msgLeft = document.querySelector("#msgLeft");
var msgRight = document.querySelector("#msgRight");
var mySpans = document.querySelectorAll('.mySpan');
var text = '';
const msg = [
  {1: "WE ARE BREAKING OUR VOW OF SILENCE"},
  {2: "TALENT IS GIVEN TRUE SKILL IS EARNED"},
  {3: "BE FLEXIBLE TO CHANGE AND STURDY IN CONVICTION"},
  {4: "USE MANY SKILLS YET WORK AS ONE"},
  {5: "TO MASTER ANYTHING FIND INTEREST IN EVERYTHING"},
  {6: "INDIVIDUALS FLOURISH IF CULTURE AND WISDOM ARE SHARED"},
  {7: "TRAIN FOR PERFECTION BUT AIM FOR MORE"},
  {8: "TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE"},
  {9: "TEMPORARY SCRIFICE BRINGS LASTING RESULTS"},
  {10: "BE FLEXIBLE TO CHANGE AND STURDY IN CONVICTION"},
  {11: "TEMPORARY SCRIFICE BRINGS LASTING RESULTS"}
];
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n >11) {slideIndex = 1}
  if (n < 1) {slideIndex = 11}
  setPrevNext();
  body.setAttribute("style" , `background-image:url("./assets/images/${slideIndex}.jpg")`)
  text = msg[slideIndex-1][slideIndex];
  if(slideIndex < 5){
    if(slideIndex===1){
      document.querySelector('.message-left').style.top = 0;
    }else{
      document.querySelector('.message-left').style.top = '30%';
    }
    msgLeft.innerHTML = text;
    msgRight.innerHTML ="";
  }else{
    msgLeft.innerHTML = "";
    msgRight.innerHTML = text;
  }
  setSpan(slideIndex);
}
function setSpan(slideIndex){
  for(var i=0; i<mySpans.length;i++){
    if(mySpans[i].hasAttribute('style')){
      mySpans[i].removeAttribute('style')
    }
  }
  mySpans[slideIndex-1].setAttribute('style','background-color:#D3D3D3')
}
function setPrevNext(){
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");
  if(slideIndex ===1 ){
    prev.style.display="none";
  } else{
    prev.style.display="block";
  }
  if( slideIndex ===11){
    next.style.display="none";
  } else{
    next.style.display="block";
  }
}
