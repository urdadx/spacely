import { create } from 'zustand';

export const usePomodoroTimer = create((set) => ({
  sessionLength: 25,
  breakLength: 5,
  timeLeft: 25 * 60,
  timerRunning: false,
  isSession: true,
  intervalId: null,
  thresholdReached: false,

  adjustLength: (type, amount) =>
    set((state) => {
      const newLength = state[type] + amount;
      const minThreshold = 5; // Minimum threshold for subtracting 5 minutes

      if (newLength >= minThreshold && newLength <= 60) {
        const timeLeftThreshold = minThreshold * 60;
        const remainingTime = state.timeLeft;

        if (remainingTime >= timeLeftThreshold) {
          return {
            ...state,
            [type]: newLength,
            timeLeft: state.isSession ? newLength * 60 : state.timeLeft,
            thresholdReached: false, // Reset thresholdReached if it was previously set
          };
        } else {
          // Set thresholdReached to true when the threshold is reached
          return {
            ...state,
            thresholdReached: true,
          };
        }
      } else {
        return state;
      }
    }),

  toggleTimer: () =>
    set((state) => {
      if (!state.timerRunning) {
        const intervalId = setInterval(() => {
          set((state) => {
            if (state.timeLeft === 0) {
              return {
                ...state,
                isSession: !state.isSession,
                timeLeft: !state.isSession ? 25 * 60 : 5 * 60,
                sessionLength: !state.isSession ? 25 : state.sessionLength,
                breakLength: state.isSession ? 5 : state.breakLength,
              };
            } else {
              return {
                ...state,
                timeLeft: state.timeLeft - 1,
              };
            }
          });
        }, 1000);
        return {
          ...state,
          timerRunning: true,
          intervalId: intervalId,
        };
      } else {
        clearInterval(state.intervalId);
        return {
          ...state,
          timerRunning: false,
          intervalId: null,
        };
      }
    }),

  resetTimer: () =>
    set({
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 25 * 60,
      timerRunning: false,
      isSession: true,
      intervalId: null,
    }),

  formatTime: (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  },
}));
