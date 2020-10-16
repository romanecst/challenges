var count = 6;

document.getElementById('val').addEventListener('click',function(){
    document.getElementById('player1').style.display = "none";
    var l = document.getElementById('mot').value.length;
    var t = '_';
    document.getElementById('devine').textContent = t.repeat(l);
    document.getElementById('player2').style.display = "flex";
    document.getElementById('point').style.display = "block";
    document.getElementById('my-canvas').style.display = "block";
});

document.getElementById('val2').addEventListener('click',function(){
    var lettre = document.getElementById('lettre').value.toUpperCase();
    document.getElementById('mot').value = document.getElementById('mot').value.toUpperCase();
    var s = document.getElementById('mot').value.split('');
    document.getElementById('lettre').value = '';
    var condition = false;
    s.forEach(el => {
        if(el == lettre){
            condition = true;
        }
    });
    if(condition){
        var i = s.indexOf(lettre);
        var dev_s = document.getElementById('devine').textContent.split('');
        dev_s[i] = lettre;
        while(i!=-1){
            i = s.indexOf(lettre,i+1);
            dev_s[i] = lettre;
        };
        var dev = "";
        dev_s.forEach(el => {
            dev += `${el}`;
        });
        document.getElementById('devine').textContent = dev;
    }else{
        count -= 1;
        document.getElementById('count').textContent = count;
    };   
    var mot = '';
    s.forEach(el => {
        mot += `${el}`;
    });

    if(mot == dev){
        var delay = 1000; //1 second
        setTimeout(function() {
            document.body.textContent = 'Victory!';
        }, delay);
    }else if(count==0){
        var delay = 1000; //1 seconds
        setTimeout(function() {
            document.body.textContent = 'You Lose';
        }, delay);
    }   
    if(count == 5){
        ctx.beginPath();
        ctx.arc(95, 50, 20, 0, 2 * Math.PI);
        ctx.stroke();
    }else if(count == 4){
        ctx.beginPath();
        ctx.moveTo(95, 70);
        ctx.lineTo(95, 130);
        ctx.stroke();
    }else if(count == 3){
        ctx.beginPath();
        ctx.moveTo(95, 100);
        ctx.lineTo(125, 55);
        ctx.stroke();
    }else if(count == 2){
        ctx.beginPath();
        ctx.moveTo(95, 100);
        ctx.lineTo(65, 55);
        ctx.stroke();
    }else if(count == 1){
        ctx.beginPath();
        ctx.moveTo(95, 130);
        ctx.lineTo(125,175);
        ctx.stroke();
    }else if(count == 0){
        ctx.beginPath();
        ctx.moveTo(95, 130);
        ctx.lineTo(65,175)
        ctx.stroke();
    }
    
});
console.log(count);
var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();

ctx.moveTo(95, 30);
ctx.lineTo(95, 20);
ctx.lineTo(25, 20);
ctx.lineTo(25, 190);
ctx.moveTo(5, 190);
ctx.lineTo(45, 190);

ctx.stroke();






