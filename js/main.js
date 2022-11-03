`use strict`;
let bombe =[];

function generator(location,number,divSize){

    for(i = 1; i <= number; i++){          
        let cellBlock = document.createElement(`div`);
        cellBlock.classList.add(divSize);
        cellBlock.innerHTML = i;
        location.append(cellBlock);
        cellBlock.addEventListener(`click`, function(){
            this.classList.toggle(`bg-blue`);
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

    const difficulty = document.getElementById(`difficulty`).value;
    container.innerHTML = ``;
        if(difficulty === `easy`){ 
        generator(container, 100, `div-10`);     


        }else if(difficulty === `normal`){
            generator(container,81, `div-9`);
        }else{
            generator(container,49,`div-7`);
        
        }
});
