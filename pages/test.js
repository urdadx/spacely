import React from 'react';
import { usePomodoroTimer } from '@/hooks/use-pomodoro';

const AnotherComponent = () => {
  const {
    sessionLength,
    timeLeft,
    timerRunning,
    isSession,
    adjustSessionLength,
    toggleTimer,
    resetTimer,
    formatTime,
  } = usePomodoroTimer();

  // Your component code here
  return (
    <div>
      <h1>Another Component</h1>
      <p>Session Length: {sessionLength} minutes</p>
      <p>Time Left: {formatTime(timeLeft)}</p>
      <p>Timer Running: {timerRunning ? 'Yes' : 'No'}</p>
      <p>Session Status: {isSession ? 'In Session' : 'On Break'}</p>
      <button onClick={() => adjustSessionLength(-5)}>
        Decrease Session Length
      </button>
      <button onClick={() => adjustSessionLength(5)}>
        Increase Session Length
      </button>
      <button onClick={toggleTimer}>
        {timerRunning ? 'Pause Timer' : 'Start Timer'}
      </button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default AnotherComponent;
