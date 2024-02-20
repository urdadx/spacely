import React from 'react';
import { usePomodoroTimer } from '@/hooks/use-pomodoro';
const AnotherComponent = () => {
  const {
    sessionLength,
    breakLength,
    timeLeft,
    timerRunning,
    isSession,
    adjustLength,
    toggleTimer,
    resetTimer,
    formatTime,
  } = usePomodoroTimer();

  const handleDecreaseSessionLength = () => {
    adjustLength(isSession ? 'sessionLength' : 'breakLength', -1);
  };

  const handleIncreaseSessionLength = () => {
    adjustLength(isSession ? 'sessionLength' : 'breakLength', 5);
  };

  return (
    <div>
      <h1>Another Component</h1>
      <p>
        {isSession ? 'Session' : 'Break'} Length:{' '}
        {isSession ? sessionLength : breakLength} minutes
      </p>
      <p>Time Left: {formatTime(timeLeft)}</p>
      <p>Timer Running: {timerRunning ? 'Yes' : 'No'}</p>
      <p>Session Status: {isSession ? 'In Session' : 'On Break'}</p>
      <button onClick={handleIncreaseSessionLength}>
        {isSession ? 'Increase Session Length' : 'Increase Break Length'}
      </button>
      <button onClick={handleDecreaseSessionLength}>
        {isSession ? 'Decrease Session Length' : 'Decrease Break Length'}
      </button>
      <button onClick={toggleTimer}>
        {timerRunning ? 'Pause Timer' : 'Start Timer'}
      </button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default AnotherComponent;
