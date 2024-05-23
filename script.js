// handles opening the nav bar menu and turning the carrot
let carrot = document.getElementById("carrot");
let navbar = document.getElementById("navbar");
let rotation = 0;
let angle = 180;
function openMenu() {
    rotation = (rotation + angle) %360;
    carrot.style.transform = "rotate(" + rotation + "deg)";
    if (rotation == 180) {     
        
        navbar.style.display ="flex";
        setTimeout(() => {
            navbar.style.opacity = 1;
            //document.getElementsByClassName("body")[0].style.opacity = .5;   
        }, this.animationDelay + 20);
        
        
    } else {
        
        setTimeout(() => {
            navbar.style.opacity = 0;
            //document.getElementsByClassName("body")[0].style.opacity = 1; 
        }, this.animationDelay + 20);   
        
        setTimeout(() => {
            navbar.style.display = "none";
        }, 500); 
        
        
    }
}

//handles the search feature

var tag = document.getElementById("search");
var items = document.getElementsByClassName("item");

var list = ["accounting", "alyssa flores", "amanda tremaine", "beki treadway","bert bronaugh","britney crowe", "calculator applications","christine staab","computer science","copy editing","current issues and events", "debra sanderson","devon robinson","editorial writing","feature writing", "headline writing","jude john", "literary criticism","mathematics", "news writing", "number sense","one act play", "ready writing","robotics","science","social studies","speech and debate","spelling"];

function showSearch() {
    var container = document.getElementById("search-container");
      console.log(tag.value);
    if (container.style.display == "block" && tag.value == ""){
        container.style.display = "none";
    } else if (tag.value == "") {
        container.style.display = "none";
    } else {
        container.style.display = "block";
    }
}

function closeSearch() {
    var container = document.getElementById("search-container");
    container.style.display = "none";
}

function changed() {
  showSearch();
  var value = tag.value.toLowerCase();
  var length = value.length;
  for (var i = 0; i < list.length; i++){
  var element = document.getElementById(list[i]);
  var inner = element.innerHTML.trim().toLowerCase();
  if (value == ""){
  	element.innerHTML = list[i].charAt(0).toUpperCase() + list[i].slice(1);
    element.style.display = "block";
  } else{
  	if (list[i].toLowerCase().includes(value.toLowerCase())){
    	element.style.display = "block";
      
      var newVal = list[i].charAt(0).toLowerCase() == (value.charAt(0)) ? value.charAt(0).toUpperCase() + value.slice(1) : value;
      
      var string = list[i].substring(0,list[i].indexOf(value)) + ("<span class='item-letter'>"+ newVal +"</span>") + list[i].substring(list[i].indexOf(value) + value.length,list[i].length);
      
      element.innerHTML = string.charAt(0).toUpperCase() + string.slice(1);
      //element.innerHTML = inner.substring(0,inner.indexOf(value)) + ("<span class='item-letter'>"+ newVal +"</span>") + inner.substring(inner.indexOf(value) + value.length,inner.length);
      //element.innerHTML.replace(regex, "<span class='item-letter'> " + value + " </span");
    }
    else {
    	element.style.display = "none";
      element.innerHTML = "";
      /*var underline = document.getElementById(list[i] + " underline");
      if (element.contains(underline) != null){
      	element.removeChild(underline);
      }*/
      
    }
   }
  }
}

let isOpen1 = false;
let isOpen2 = false;
let rotation2=0;
let angle2 = 180;
function openEvent(num) {
    if (num==1) {
        rotation = (rotation + angle) %360;
        isOpen1 = !isOpen1;
        let carrot2 = document.querySelectorAll('.carrot');
        if (isOpen1) {
            carrot2[1].style.transform = "rotate(" + rotation + "deg)";
            document.getElementById("mobile-contests").style.display="block";
        } else {
            carrot2[1].style.transform = "rotate(" + rotation + "deg)";
            document.getElementById("mobile-contests").style.display="none";
        }
    } else if (num==2) {
        rotation2 = (rotation2 + angle2) %360;
        isOpen2 = !isOpen2;
        let carrot2 = document.querySelectorAll('.carrot');
        if (isOpen2) {
            carrot2[1].style.transform = "rotate(" + rotation2 + "deg)";
            document.getElementById("part-wrapper").style.display="block";
        } else {
            carrot2[1].style.transform = "rotate(" + rotation2 + "deg)";
            document.getElementById("part-wrapper").style.display="none";
        }
    }
    
}

let burgerOpen = false;
function changeBurger() {
    burgerOpen = !burgerOpen;
    let path = window.location.href;
    if (burgerOpen) {
        document.getElementById("burger-icon").style.display = "none";
        document.getElementById("burger-x").style.display = "block";
        document.getElementById("body").style.display="none";
        document.getElementById("footer").style.display="none";
        document.getElementById("header").style.boxShadow="none";
        document.getElementById("mobile-menu-nav").style.display="block";
    } else {
        document.getElementById("burger-x").style.display = "none";
        document.getElementById("burger-icon").style.display = "block";
        if (path.indexOf('coaches.html')>-1) {
            document.getElementById("body").style.display="flex";
        } else {
            document.getElementById("body").style.display="block";
        }
        
        document.getElementById("footer").style.display="inline-flex";
        document.getElementById("header").style.boxShadow="0px 8px 16px 0px rgba(0,0,0,.2)";
        document.getElementById("mobile-menu-nav").style.display="none";
    }
}

//perhaps check the screen size and reset everything when it is at 1221px, just like hostinger's responsive layout
window.addEventListener('resize',onResize);
function onResize() {
    let path= window.location.href;
    if (window.screen.width > 1220) {
        document.getElementById("burger-x").style.display = "none";
        document.getElementById("burger-icon").style.display = "block";
        document.getElementById("mobile-menu-nav").style.display="none";
        if (path.indexOf('coaches.html')>-1) {
            document.getElementById("body").style.display="flex";
        } else {
            document.getElementById("body").style.display="block";
        }
        document.getElementById("footer").style.display="inline-flex";
        document.getElementById("header").style.boxShadow="0px 8px 16px 0px rgba(0,0,0,.2)";
    }
}
