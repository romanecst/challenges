for(var i=0; i<document.getElementsByClassName("square").length; i++){
    var colors = ['blue', 'red', 'green','yellow','white','orange'];
    var colorIndex = Math.round((colors.length-1)*Math.random()); 
    var c = colors[colorIndex];
    document.getElementsByClassName("square")[i].style.backgroundColor = `${c}`;
}


