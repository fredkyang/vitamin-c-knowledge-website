let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");

function openmenu() {
  menu.style.left = "0";
  open.style.display = "none";
  close.style.display = "block";
}
function closemenu() {
  menu.style.left = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}


// nav下移颜色变化
function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}


window.addEventListener("scroll", change);




(() =>{
 
  const navMenu = document.querySelector(".nav-menu"),
  mediaSize = 991;

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

})();

