//Movement Animation to happen
const card = document.querySelector(".card");
const container1 = document.querySelector(".container1");

//Items
const title = document.querySelector(".title");
const logos = document.querySelector(".logos img");
const email = document.querySelector(".email");
const description = document.querySelector(".info h3");
const social = document.querySelector(".social");

//Moving Animation Event
container1.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 35;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container1.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  //Popout
  title.style.transform = "translateZ(150px)";
  logos.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(75px)";
  social.style.transform = "translateZ(100px)";
  email.style.transform = "translateZ(50px)";
});

//Animate Out
container1.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
  title.style.transform = "translateZ(0px)";
  logos.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  social.style.transform = "translateZ(0px)";
  email.style.transform = "translateZ(0px)";
});

//Portfolio Movement
const portfolioItems=document.querySelector('.portfolio-items-wrapper')
const portfolioItems1=document.querySelector('.portfolio-items1-wrapper')
const portfolioItems2=document.querySelector('.portfolio-items2-wrapper')
const portfolioItems3=document.querySelector('.portfolio-items3-wrapper')
const portfolioItem1=document.querySelector('.portfolio-item1-wrapper')
const portfolioItem2=document.querySelector('.portfolio-item2-wrapper')
const portfolioItem3=document.querySelector('.portfolio-item3-wrapper')

  /*portfolioItems.forEach(portfolioItem1 => {
  portfolioItem1.addEventListener('mouseover',() => {
    portfolioItem1.childNodes[1].classList.add('img-darken');
  })
  portfolioItem1.addEventListener('mouseout',() => {
    portfolioItem1.childNodes[1].classList.remove('img-darken');
  })
});*/

//Portfolio animation
portfolioItems1.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  portfolioItem1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

portfolioItems2.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  portfolioItem2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

portfolioItems3.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  portfolioItem3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Subtitles Movement
const subtitle1=document.querySelector('.subtitle1')
const subtitle2=document.querySelector('.subtitle2')
const subtitle3=document.querySelector('.subtitle3')

portfolioItems1.addEventListener("mouseenter", (e) => {
  portfolioItem1.style.transition = "none";
  //Popout
  subtitle1.style.transform = "translateZ(150px)";
});

portfolioItems2.addEventListener("mouseenter", (e) => {
  portfolioItem2.style.transition = "none";
  //Popout
  subtitle2.style.transform = "translateZ(150px)";
});

portfolioItems3.addEventListener("mouseenter", (e) => {
  portfolioItem3.style.transition = "none";
  //Popout
  subtitle3.style.transform = "translateZ(150px)";
});

//Animate Out
portfolioItems1.addEventListener("mouseleave", (e) => {
  portfolioItem1.style.transition = "all 0.5s ease";
  portfolioItem1.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  subtitle1.style.transform = "translateZ(0px)";
});

portfolioItems2.addEventListener("mouseleave", (e) => {
  portfolioItem2.style.transition = "all 0.5s ease";
  portfolioItem2.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  subtitle2.style.transform = "translateZ(0px)";
});

portfolioItems3.addEventListener("mouseleave", (e) => {
  portfolioItem3.style.transition = "all 0.5s ease";
  portfolioItem3.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  subtitle3.style.transform = "translateZ(0px)";
});
