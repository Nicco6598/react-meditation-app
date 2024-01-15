import React, { useState, useRef } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [initialTime, setInitialTime] = useState(0);
    const inputRef = useRef(null);
  
    const toggleTimer = () => {
      if (!isActive) {
        if (inputRef.current) {
          const secondsInput = parseInt(inputRef.current.value, 10);
    
          // Verifica se il valore inserito è positivo
          const positiveSeconds = Math.max(0, secondsInput);
    
          if (positiveSeconds > 0) {
            setSeconds(positiveSeconds);
            setInitialTime(positiveSeconds);
            setIsActive(true);
            setIsPaused(false);
          } else {
            // Aggiungi qui eventuali azioni per gestire il caso in cui il valore non è positivo
            alert('Inserisci un valore positivo per avviare il timer.');
          }
        }
      } else {
        setIsPaused(!isPaused);
      }
    };
  
    const resetTimer = () => {
      setIsActive(false);
      setIsPaused(false);
      setSeconds(initialTime);
    };
  
    const tick = () => {
      if (isActive && !isPaused && seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else if (isActive && !isPaused && seconds === 0) {
        setIsActive(false);
        alert('Timer scaduto!');
      }
    };
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const remainingSeconds = time % 60;
      return `${String(minutes).padStart(2, '0')} Minuti e ${String(remainingSeconds).padStart(2, '0')} Secondi`;
    };
  
    React.useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }, [isActive, isPaused, seconds]);
  
    return (
      <div className="timer">
        <p>{formatTime(seconds)}</p>
        <input ref={inputRef} type="number" placeholder="Inserisci i secondi" />
        <div id="timer">
          <button onClick={toggleTimer}>
            {isActive ? (isPaused ? 'Riprendi' : 'Pausa') : 'Avvia'}
          </button>
          <button onClick={resetTimer}>Resetta</button>
        </div>
      </div>
    );
  };

export default Timer;

  