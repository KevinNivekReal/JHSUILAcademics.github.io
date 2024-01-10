let carrot = document.getElementById("carrot");
let navbar = document.getElementById("navbar");
let rotation = 0;
let angle = 180;
function openMenu() {
    rotation = (rotation + angle) %360;
    carrot.style.transform = "rotate(" + rotation + "deg)";
    if (rotation == 180) {
        navbar.style.display ="block";
    } else {
        navbar.style.display = "none";
    }
}
