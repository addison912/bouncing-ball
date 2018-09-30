//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
     var posX = 0;
     var posY = 0;
    //our box element
    var box = document.getElementById('box');
    var x = setInterval(move, 10);
    var directionX;
    var directionY;


  
    function move() {

        if(posX >= 270) {
            directionX = 'left';
            posX -= 1;
        } else if (posX <= 0) {
            directionX = 'right';
            posX += 1;
        }
        if (directionX == 'right') {
            posX += 1;
            box.style.left = posX+"px";
        } else if (directionX == 'left') {
            posX -= 1;
            box.style.left = posX+"px";
        }

        
        if(posY >= 150) {
            directionY = 'up';
            posY -= 1;
        } else if (posY <= 0) {
            directionY = 'down';
            posY += 1;
        }
        if (directionY == 'down') {
            posY += 1;
            box.style.top = posY+"px";
        } else if (directionY == 'up') {
            posY -= 1;
            box.style.top = posY+"px";
        }
    }
};