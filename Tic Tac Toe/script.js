//place 'X' or 'O'

const boxItems = document.getElementsByClassName('box-item');
const turn = document.getElementById('turn');
let playerO = true



function selectWinnerBoxes (b1, b2, b3){
    b1.style.backgroundColor= "red";
    b2.style.backgroundColor= "red";
    b3.style.backgroundColor= "red";
    turn.innerHTML = "Congratulation! " + b1.innerHTML + " Won ";


}
// Game setup
for(let i=0; i< boxItems.length; i++){
    let item = boxItems[i];
    item.onclick = function(){
    //not allow to change value
        if(item.innerHTML != "X" && item.innerHTML != "O"){
    // replace content of boxItem with 'O'/'X'
        if (playerO == true) {
            item.innerHTML = 'O';
            //change player
            playerO = !playerO
            turn.innerHTML = " X Turn Now!"
            checkWon();
            // displayScore();
            
        } else if(playerO == false){
            item.innerHTML = 'X';
            //change player
            playerO = !playerO
            turn.innerHTML = " O Turn Now!"
            checkWon();
            // displayScore();
           
        }
        }   
    }
}

// //check winning
// function checkWon (){  
// const item0 = boxItems[0].innerHTML;
// const item1 = boxItems[1].innerHTML;
// const item2 = boxItems[2].innerHTML;
// const item3 = boxItems[3].innerHTML;
// const item4 = boxItems[4].innerHTML;
// const item5 = boxItems[5].innerHTML;
// const item6 = boxItems[6].innerHTML;
// const item7 = boxItems[7].innerHTML;
// const item8 = boxItems[8].innerHTML; 
// console.log(item0)
// //row winning
//     if( (item0 == "O" && item1== "O" && item2 == "O")   || 
//         (item3 == "O" && item4 == "O" && item5 == "O")  ||
//         (item6 == "O" && item7 == "O" && item8 == "O")  ||
// //column winning
//         (item0 == "O" && item3 == "O" && item6 == "O")  ||
//         (item1 == "O" && item4 == "O" && item7 == "O")  ||
//         (item2 == "O" && item5 == "O" && item8 == "O")  ||
// //cross winning
//         (item0 == "O" && item4 == "O" && item8 == "O")  ||
//         (item2 == "O" && item4 == "O" && item6 == "O")){
//         window.alert('Player O won! ')
//         oWin++
//         }

//     else if( (item0 == "X" && item1 == "X" && item2 == "X")  || 
//              (item3 == "X" && item4 == "X" && item5 == "X")  ||
//              (item6 == "X" && item7 == "X" && item8 == "X")  ||
//              (item0 == "X" && item3 == "X" && item6 == "X")  ||
//              (item1 == "X" && item4 == "X" && item7 == "X")  ||
//              (item2 == "X" && item5 == "X" && item8 == "X")  ||
//              (item0 == "X" && item4 == "X" && item8 == "X")  ||
//              (item2 == "X" && item4 == "X" && item6 == "X")){
//             window.alert('Player X won!')
//             xWin++
//             }
//     else if( item0 !="" && item1 !="" && item2 !="" &&
//               item3 !="" && item4 !="" && item5 !="" &&
//               item6 !="" && item7 !="" && item8 !=""){
//               window.alert('Draw match!')
//               }
// }

//display score of both players
// function displayScore(){
// document.getElementById('Xscore').innerHTML = xWin;
// document.getElementById('Oscore').innerHTML = oWin;
// }

function restartGame(){ 
    location.reload();
}

const resetGame = document.getElementsByClassName('reset');
console.log(resetGame)
console.log(resetGame[0])
resetGame[0].onclick = restartGame

// resetGame[0].onclick = function(){
//     location.reload();
// }

// resetGame[1].onclick = function(){
//     location.reload();
// }

// resetGame[0].onclick = restartGame

function checkWon(){

    const item0 = document.getElementById('item-0');
    const item1 = document.getElementById('item-1');
    const item2 = document.getElementById('item-2');
    const item3 = document.getElementById('item-3');
    const item4 = document.getElementById('item-4');
    const item5 = document.getElementById('item-5');
    const item6 = document.getElementById('item-6');
    const item7 = document.getElementById('item-7');
    const item8 = document.getElementById('item-8');
    
    if (item0.innerHTML !=="" && item0.innerHTML == item1.innerHTML && item0.innerHTML == item2.innerHTML){
        selectWinnerBoxes(item0, item1, item2 );
    }else if (item3.innerHTML !=="" && item3.innerHTML == item4.innerHTML && item3.innerHTML == item5.innerHTML){
        selectWinnerBoxes(item3, item4, item5 );
    }else if (item6.innerHTML !=="" && item6.innerHTML == item7.innerHTML && item6.innerHTML == item8.innerHTML){
        selectWinnerBoxes(item6, item7, item8 );
    }else if (item0.innerHTML !=="" && item0.innerHTML == item3.innerHTML && item0.innerHTML == item6.innerHTML){
        selectWinnerBoxes(item0, item3, item6 );
    }else if (item1.innerHTML !=="" && item1.innerHTML == item4.innerHTML && item1.innerHTML == item7.innerHTML){
        selectWinnerBoxes(item1, item4, item7 );
    }else if (item2.innerHTML !=="" && item2.innerHTML == item5.innerHTML && item2.innerHTML == item8.innerHTML){
        selectWinnerBoxes(item2, item5, item8 );
    }else if (item0.innerHTML !=="" && item0.innerHTML == item4.innerHTML && item0.innerHTML == item8.innerHTML){
        selectWinnerBoxes(item0, item4, item8 );
    }else if (item2.innerHTML !=="" && item2.innerHTML == item4.innerHTML && item2.innerHTML == item6.innerHTML){
        selectWinnerBoxes(item2, item4, item6 );
    }else if (item0.innerHTML !="" && item1.innerHTML !="" && item2.innerHTML !="" && item3.innerHTML !="" &&
              item4.innerHTML !="" && item5.innerHTML !="" && item6.innerHTML !="" && item7.innerHTML !="" &&
              item8.innerHTML !=""){
                  turn.innerHTML = " Draw game"
              }
    
}





