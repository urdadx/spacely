import { create } from 'zustand';

export const usePomodoroTimer = create((set) => ({
  sessionLength: 25,
  timeLeft: 25 * 60,
  timerRunning: false,
  isSession: true,
  intervalId: null,

  adjustSessionLength: (amount) =>
    set((state) => {
      const newSessionLength = state.sessionLength + amount;
      if (newSessionLength >= 1 && newSessionLength <= 60) {
        return {
          ...state,
          sessionLength: newSessionLength,
          timeLeft: newSessionLength * 60,
        };
      }
      return state;
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
                timeLeft: state.isSession ? 5 * 60 : state.sessionLength * 60,
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
