     let score  = JSON.parse(localStorage.getItem('score')) || {
            wins : 0,
            loses :0,
            tie : 0
          };

          updateScoreElement();
        
    //  if(score === null)
    // we can also write it as
    // this mean score exist or not
    // if(!score)    we have done this above using the 
    //     {
    //       score ={
    //         wins : 0,
    //         loses :0,
    //         tie : 0
    //       }
    //     }
    // json only support "  "  
    //     //  JSON.parse.getItem('score');
    //  at bottme we converted our score into string using json because localStorage only support stiring now we are going to change it back into json object to get the output

      function updateScoreElement ()
      {
                  document.querySelector('.js-score').innerHTML = `Wins:${score.wins} Loses:${score.loses} tie:${score.tie}`
      }


function pickComputerMove()
{
         let computerMove = ''

      const randomNumber = Math.random();
        
      if(randomNumber >= 0 && randomNumber < 1 / 3)
      {
        computerMove = 'rock'
      }
      else if(randomNumber >= 1 / 3  && randomNumber < 2 / 3 )
      {
            computerMove = 'paper'
      }
      else if (randomNumber >= 2 / 3  && randomNumber <1)
      {
        computerMove = 'scissors'
      }
      return computerMove;
}



  document.body.addEventListener('keydown',(event)=>
  {
    // console.log(event.key)
    if(event.key === 'r'){
      playGame('rock')
    }
    else if(event.key === 'p'){
       playGame('paper')
    }
    else if (event.key === 's')
    {
      playGame('scissors')
    }
  })

// autoplay 
// 
         
    let  isAutoPlaying = false;
     let interValid;
    //  const autoPlay = ()=>{

    //  };    this can do the below work for the arrow functio
    function autoPlay()
    {    
        if(!isAutoPlaying )
        {
          interValid =  setInterval(()=>{
             const playerMove = pickComputerMove();
         playGame(playerMove);
       },1000)
       isAutoPlaying = true;
      }   
      else
      { 
         clearInterval(interValid);
        isAutoPlaying = false;
      }
    }
 

  // adding eventListner

  document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock')
  });


   document.querySelector('.js-paper-button').addEventListener('click', () => 
    {
    playGame('paper')
  })
  
  document.querySelector('.js-scissors-button').addEventListener('click',()=>
  {
    playGame('scissors')
  })



function playGame(playerMove)
{

   const computerMove  =    pickComputerMove();
        //  we stored the function into the variable
                let result = '';
                if(playerMove === 'scissors')
                {

                if(computerMove === 'rock')
                {
                  result = 'you lose';
                }
                else if(computerMove === 'paper')
                {
                result = 'you win'
                }
                else if(computerMove === 'scissors')
                {
                  result = 'tie'
                }

                 }
                else if(playerMove === 'paper')
               
                {
                        if(computerMove === 'rock')
                        {
                          result = 'you win';
                        }
                        else if(computerMove === 'paper')
                        {
                        result = 'tie'
                        }
                        else if(computerMove === 'scissors')
                        {
                          result = 'you lose'
                        }
                            }

                                else if (playerMove === 'rock')
                                  {
                                         if(computerMove === 'rock')
                                         {
                                           result = 'tie';
                                         }
                                         else if(computerMove === 'paper')
                                         {
                                         result = 'you lose'
                                         }
                                         else if(computerMove === 'scissors')
                                         {
                                           result = 'you win'
                                         }
                                  }


                           // updating score

                  if(result  === 'you win')
                  {
                    score.wins +=1;
                  }
                  else if (result === 'you lose')
                  {
                    score.loses += 1;
                  }
                  else if(result === 'tie')
                  {
                     score.tie += 1;

                  }

                  localStorage.setItem('score',JSON.stringify(score));
                    
                   updateScoreElement();

                   document.querySelector('.js-result').innerHTML = result;
              
                  //  document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
                   document.querySelector('.js-moves').innerHTML = `
     You
      <img class="move-icon" src="images/${playerMove}-emoji.png" alt="">
    
    <img class="move-icon" src="images/${computerMove}-emoji.png" alt="">
    Computer`;
              

}
