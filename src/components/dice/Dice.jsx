import React, { useEffect, useState } from 'react';
import trap from '../../../assets/images/jo/dado/trampa.png';
import enemy from '../../../assets/images/jo/dado/enemigos.png';
import poder from '../../../assets/images/jo/dado/poder.png';
import blanco from '../../../assets/images/jo/dado/blanco.png';
import './dices.css';

export default function Dice() {
  const [dice, setDice] = useState(0);
  const [image, setImage] = useState(poder);
  const [animateDice, setAnimateDice] = useState(false);

  const throwDice = () => {
    setAnimateDice(true); 
    const result = Math.floor(Math.random() * 6) + 1;
    console.log(result, 'resultado');
    setDice(result);
  };

  const getDiceFace = () => {
    if (dice === 1 || dice === 3) {
      setImage(trap);
    } else if (dice === 2 || dice === 6) {
      setImage(enemy);
    } else if (dice === 5 || dice === 4) {
      setImage(poder);
    } else {
      setImage(blanco);
    }
  };

  useEffect(() => {
    getDiceFace();
  }, [dice]);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setAnimateDice(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [animateDice]);

  return (
    <div className="diceJOA-container">
      <div className='launcher'>
        {/* Add the animation class when the dice is rolled */}
        <img
          src={animateDice ? blanco : image}
          alt="dice"
          className={`dice-img ${animateDice ? 'dice-roll-animation' : ''}`}
          onClick={throwDice}
        />
      </div>
    </div>
  );
}
