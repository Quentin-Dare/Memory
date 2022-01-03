let index = 0;
let lastcase = -1;


function getRandomInt (min, max) {
    min = Math.ceil (min);
    max = Math.floor (max);
    return Math.floor (Math.random() * (max-min+1)) + min; 
}

index=getRandomInt (0,15);
console.log (index);


function doClick (id) {
    console.log("oui");

    if (lastcase>=0){

        document.querySelector('#photo'+lastcase).src ='coeur.jpg';

    }

    console.log (id);
    if (index==id){
        document.querySelector('#photo'+id).src = 'bomb.png'; 
        index = getRandomInt (0,15);        
        console.log(index);

    }else{
        document.querySelector('#photo'+id).src ='smiley.jpg';
        
    }

    lastcase = id;
    console.log ('clicked on #'+id)
}