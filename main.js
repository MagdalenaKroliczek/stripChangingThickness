let size = 100;
let growRect = true;
const div = document.createElement('div');
document.body.appendChild(div);

document.body.style.height = 10000 + "px";

div.style.width = "100%";
div.style.height = size +"px";
div.style.position = "fixed";
div.style.left = 0;
div.style.right = 0;
div.style.top = 0;
div.style.backgroundColor = "green";

const changeHeight = function() {

    if(size>window.innerHeight/2) {
        growRect = !growRect
        div.style.backgroundColor = "red";

    }
    else if (size <=0) {
        growRect = !growRect
        div.style.backgroundColor = "green";

    }
    if (growRect) {
    size+=10;
}

else {
    size-=10;    
}

div.style.height = size +"px";


}
window.addEventListener("scroll", changeHeight)
