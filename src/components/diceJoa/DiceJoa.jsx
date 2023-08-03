import React, { useEffect, useState } from 'react';
import trap from '../../../assets/images/jo/dado/trampa.png';
import enemy from '../../../assets/images/jo/dado/enemigos.png';
import poder from '../../../assets/images/jo/dado/poder.png';
import blanco from '../../../assets/images/jo/dado/blanco.png';
import './diceJoa.css';

export default function DiceJoa() {
  const [image, setImage] = useState(blanco);
  const [animateDice, setAnimateDice] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyWindowOpen, setHistoryWindowOpen] = useState(false);

  const throwDice = () => {
      const result = Math.floor(Math.random() * 6) + 1;
      console.log(result, 'resultado');
      getDiceFace(result);
      setAnimateDice(true);
  };

  const getDiceFace = (result) => {
    const imagesMap = {
      1: trap,
      2: enemy,
      3: trap,
      4: poder,
      5: poder,
      6: enemy,
    };
  
    const imageToSet = imagesMap[result] || blanco;
    setImage(imageToSet);
    setDiceHistory();
  };
 
  const setDiceHistory = () => {
    const time = getCurrentDateAndTimeInSpain();
    const defaultText = (result, time) =>
      `${result.toUpperCase()}-${time}`;
    if (image === trap) {
      setHistory((prevHistory) => [
        ...prevHistory,
        defaultText('trampa', time),
      ]);
    }
    if (image === enemy) {
      setHistory((prevHistory) => [
        ...prevHistory,
        defaultText('enemigos', time),
      ]);
    }
    if (image === poder) {
      setHistory((prevHistory) => [...prevHistory, defaultText('poder', time)]);
    }
  };
  const displayHistory = () => setHistoryWindowOpen(!historyWindowOpen);
  const getCurrentDateAndTimeInSpain = () => {
    const currentDate = new Date();
    const options = {
      timeZone: 'Europe/Madrid',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    return currentDate.toLocaleString('en-GB', options);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateDice(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [animateDice]);

  return (
    <div className="diceJOA-container">
      <h1>JOA</h1>
      <div className="launcher">
        <img
          src={animateDice ? blanco : image}
          alt="dice"
          className={`dice-img ${animateDice ? 'dice-roll-animation' : ''}`}
          onClick={!animateDice ? throwDice : null}
        />
        {historyWindowOpen && (
          <ul className="history-list">
            {history.map((result, index) => (
              <li key={index}> {result}</li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={displayHistory} className="dice-history">
        {historyWindowOpen ? 'X' : 'Historial'}
      </button>
    </div>
  );
}
