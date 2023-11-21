// let increamentButton = document.getElementById('btn1');
// let decreamentButton = document.getElementById('btn2');
// let playerA = document.getElementById('counterA');
// let playerB = document.getElementById('counterB');

// let counterA = 0;
// let counterB = 0;
// function UserA(){
        
//         counterA += 1;
//         counterB -= 1;
    
//     console.log(counterA);
//     console.log(counterB);
//     document.getElementById('counterA').innerHTML = counterA;
//     document.getElementById('counterB').innerHTML = counterB;

//     if(counterA == 10){
//         document.getElementById('winner').innerHTML = 'Player A win.';
//     }
// }

// function UserB(){
        
//     counterA -= 1;
//     counterB += 1;

// console.log(counterA);
// console.log(counterB);
// document.getElementById('counterA').innerHTML = counterA;
// document.getElementById('counterB').innerHTML = counterB;
// if(counterB == 10){
//     document.getElementById('winner').innerHTML = 'Player B win.';
// }
// }

            let counterA = 0;
            let counterB = 0;

            function updateCounters(){
                document.getElementById('counterA').innerText = counterA;
                document.getElementById('counterB').innerText = counterB;

                if(counterA === 10){
                    document.getElementById('winner').innerHTML = 'Player A Wins!';
  
                }else if(counterB === 10){
                    document.getElementById('winner').innerHTML = 'Player B Wins!';

                }
                    }

                    function userA(){
                        counterA++;
                        counterB--;
                        updateCounters();
                    }

                    function userB(){
                        counterA--;
                        counterB++;
                        updateCounters();
                    }
       


