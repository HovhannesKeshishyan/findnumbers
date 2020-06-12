const numbers_block = document.getElementsByClassName('numbers_blok')[0];
let numbers = Array.from( document.getElementsByClassName('number') );
const reset_btn = document.getElementById('reset');
const check_btn = document.getElementById('check');
let tryes_left = 10;

document.getElementById('modal_play_again_button').onclick = reset;
document.getElementById('modal_ok_button').onclick = reset;

let state = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function setRandomNumbers(){
	for (let i = 0; i < state.length; i++){
		for (let j = 0; j < state[i].length; j++){
			let number = Math.floor(Math.random() * 10);
			state[i][j] = number;
		}
	}
}

setRandomNumbers();


numbers_block.addEventListener('click', function() {
    if (event.target === numbers_block || event.target.classList.contains('numbers_column')) return false;
    event.target.innerHTML = +event.target.innerHTML + 1 > 9 ? 0 : +event.target.innerHTML + 1;
})


// numbers_block.addEventListener('mousedown', function() {
//     if (event.target === numbers_block) return false;    
//     event.target.style.width = '80%';
//     event.target.style.marginLeft = '10%';
// })

// numbers_block.addEventListener('mouseup', function() {
//     if (event.target === numbers_block) return false;    
//     event.target.style.width = '100%';
//     event.target.style.marginLeft = '0';
// })


check_btn.addEventListener('click', check);


let row1 = document.getElementsByClassName('row1');
let row2 = document.getElementsByClassName('row2');
let row3 = document.getElementsByClassName('row3');

let rows = [row1, row2, row3];

let totalAccepts = 0;

function check() {
	totalAccepts = 0;
	tryes_left--;
	document.getElementById('tryes_left').innerHTML = tryes_left;

	for(let i = 0; i < document.getElementsByClassName('light').length; i++){
		document.getElementsByClassName('light')[i].style.backgroundColor = 'red';
	}
    
    checkByRows();    
    checkByColumns();
    
    if(totalAccepts === 9){
    	document.getElementsByClassName('modal_message')[0].innerHTML = 'You Win';
    	document.getElementsByClassName('modal_container')[0].style.display = 'block'
    }
    else if(tryes_left === 0){
    	document.getElementsByClassName('modal_message')[0].innerHTML = 'You Lose';
    	document.getElementsByClassName('modal_container')[0].style.display = 'block'
    }
}



function checkByRows(){
	for (let i = 0; i < state.length; i++) {
    	let count = 0;    	
        for (let j = 0; j < state[i].length; j++) {
            if (+rows[i][j].innerHTML === state[i][j]) {
                document.getElementsByClassName(`rl-row${i+1}`)[count].style.backgroundColor = 'green';
                count++;
                totalAccepts++;              
            }
            else{
            	document.getElementsByClassName(`rl-row${i+1}`)[count].style.backgroundColor = 'red';
            }
        }
    }
}



function checkByColumns(){
    for (let i = 0; i < state.length; i++){
    	let count = 0;
    	for (let j = 0; j < state[i].length; j++){
    		if (+rows[j][i].innerHTML === state[j][i]) {    			
                document.getElementsByClassName(`bl-col${i+1}`)[count].style.backgroundColor = 'green';
                count++;                
            }
            else{
            	document.getElementsByClassName(`bl-col${i+1}`)[count].style.backgroundColor = 'red';
            }
    	}
    }
}

document.getElementById('reset').onclick = reset;

function reset() {
	document.getElementsByClassName('modal_container')[0].style.display = 'none';
	setRandomNumbers();
	totalAccepts = 0;
	tryes_left = 10;
	document.getElementById('tryes_left').innerHTML = tryes_left;
	for(let i = 0; i < document.getElementsByClassName('light').length; i++){
		document.getElementsByClassName('light')[i].style.backgroundColor = 'red';
	}
	for(let i = 0; i < document.getElementsByClassName('numbers').length; i++){
		document.getElementsByClassName('numbers')[i].innerHTML = 0;
	}
}