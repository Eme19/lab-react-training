import { useState, useEffect } from 'react';
import Dicezero from '../assets/images/dice-empty.png';
import Diceone from '../assets/images/dice1.png';
import Dicetwo from '../assets/images/dice2.png';
import Dicethree from '../assets/images/dice3.png';
import Dicefour from '../assets/images/dice4.png';
import Dicefive from '../assets/images/dice5.png';
import Dicesix from '../assets/images/dice6.png';




function Dice(){


    const diceArray = [
        Dicezero,
           Diceone,
           Dicetwo,
           Dicethree,
           Dicefour,
           Dicefive,
           Dicesix]

const [dice, setDice] = useState(Dicezero)
 
function handleChangeIndex(){
    setDice(Dicezero)
}
    useEffect(()=>{
    if(dice === Dicezero){
        setTimeout(()=> {
            const randomDiceIndex= Math.floor(Math.random() * diceArray.length )
            setDice(diceArray[randomDiceIndex])
        },1000)
    }
})


    return (  
<div className='dice-style'>
<img src={dice} alt="diceImage" height={300} onClick={handleChangeIndex} style={{cursor: "pointer"}}/>
</div>
    )
}
export default Dice;