// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
var date =document.getElementById("date");
const linkContainer=document.querySelector(".links-container");
const links =document.querySelector(".links");
      //console.log(linkContainer);
date.innerHTML=new Date().getFullYear();
// ********** close links ************
const navToggle =document.querySelector(".nav-toggle");
     //console.log(navToggle);
navToggle.addEventListener("click",function(){
  const containerHeight =linkContainer.getBoundingClientRect().height;
  const  linkHeight = links.getBoundingClientRect().height;
  if(containerHeight===0){
    linkContainer.style.height=`${linkHeight}px`;
  }else{
    linkContainer.style.height=0;
  }
})


// ********** fixed navbar ************
const navbar=document.getElementById("nav");
const toplink=document.querySelector(".top-link");

window.addEventListener("scroll",function(){
  

const navHeight=navbar.getBoundingClientRect().height;
const scrollHeight=window.pageYOffset;
console.log(scrollHeight);
if(scrollHeight>navHeight){
  navbar.classList.add("fixed-nav");
}

else{
  navbar.classList.remove("fixed-nav");
}
if(scrollHeight>500){
  toplink.classList.add("show-link");
}else{
  toplink.classList.remove("show-link")
}

});


// ********** smooth scroll ************
// select links
const scrollLinks=document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link)=>{
  link.addEventListener("click",(e)=>{
    e.preventDefault();
    const id =e.currentTarget.getAttribute("href").slice(1);
    const navHeight=navbar.getBoundingClientRect().height;
const containerHeight = linkContainer.getBoundingClientRect().height;
    const fixedNav=navbar.classList.contains("fixed-nav");
    const element=document.getElementById(id);
    let position =element.offsetTop-navHeight;
    if(!fixedNav){
    position =position-navHeight;
    }
    if(navHeight>82){
position = position + containerHeight;
    }
    window.scrollTo({
      left:0,
      top:position,
    });
    linkContainer.style.height=0;
  });
  
  
});
  