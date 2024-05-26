const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


let humanScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoice) => {
playTheGame(humanChoice , playMachine() )


}


const playMachine = ()=> {
    const choices =['rock', 'paper', 'scissors']
const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]

}

const playTheGame = (human, machine) => {

    console.log ('humano: ' + human + " \nMaquina: " + machine)

//empate
    if(human === machine){
        result.innerHTML = "Deu Empate! &#x1F61C"
    }else if (
        (human ==='paper' && machine ==='rock') ||
        (human==='rock' && machine==='scissors') ||
        (human==='scissors' && machine==='paper')
    ){
     //convidado ganha      
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML= "Você ganhou &#x1F60D &#x1F389" //"Ganhou!! \n &#x1F60D &#x1F389"

    //maquina ganha
      } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "você perdeu para Alexa!&#x1F629"
      }
    



  
    
}
// `"${inputUserName} ganhou"`