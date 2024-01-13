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
        }, this.animationDelay + 20);
        document.getElementsByClassName("body")[0].style.opacity = .5;   
    } else {
        
        setTimeout(() => {
            navbar.style.opacity = 0;
            
        }, this.animationDelay + 20);   
        document.getElementsByClassName("body")[0].style.opacity = 1; 
        setTimeout(() => {
            navbar.style.display = "none";
        }, 500); 
        
        
    }
}
