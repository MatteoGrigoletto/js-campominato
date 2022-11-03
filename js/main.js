`use strict`;
let bombe =[];
let points = 0;
let difficulty = document.getElementById(`difficulty`).value;

function generator(location,number,divSize){

    for(i = 1; i <= number; i++){          
        let cellBlock = document.createElement(`div`);
        cellBlock.classList.add(divSize);
        cellBlock.innerHTML = i;
        location.append(cellBlock);

        cellBlock.addEventListener(`click`, function(){

        let check = parseInt(this.innerHTML);
        if(bombe.includes(check)){
           
            this.classList.add(`bg-red`);
            alert(`hai perso ottenendo ${points} punti`)
           window.location.reload();
            
        }else{
            this.classList.add(`bg-blue`);  
            points += 1;
            document.getElementById(`score`).innerHTML=`Il tuo punteggio e': ${points}`;
            if(difficulty === `easy` && points === 85){
                alert(`hai vinto con ${points} punti`);
                window.location.reload();
            }else if( difficulty === `normal` && points === 66){
                alert(`hai vinto con ${points} punti`);
                window.location.reload();
            }else if(difficulty === `hard` && points === 33){
                alert(`hai vinto con ${points} punti `);
                window.location.reload();
            }
        }
       console.log(`hai cliccato la casella `, this.innerHTML);      
       })    
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function bombs(array ,  maxNumber){
    i=0;
    while(bombe.length < 16){
        let number =  getRandomInt(1,maxNumber);
         if(number != array[i]) {
             array.push(number);
         }
         i++;
    }
}

const container = document.querySelector(`.container`);
const btnGenerator = document.getElementById(`my-btn`);
const Generator = btnGenerator.addEventListener(`click`, function(){

    difficulty = document.getElementById(`difficulty`).value;
    container.innerHTML = ``;
        if(difficulty === `easy`){ 
            bombs(bombe, 100);
            generator(container, 100, `div-10`);            
        }
        else if(difficulty === `normal`){
            bombs(bombe, 81);
            generator(container,81, `div-9`);
        }
        else{
            bombs(bombe, 49);
            generator(container,49,`div-7`);     
        }
});
