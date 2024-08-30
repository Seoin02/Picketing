import { create } from 'zustand';

export type ServerTimeState = {
  interval: number;
  setInterval: (interval: number) => void;
};

const useServerTimeStore = create<ServerTimeState>(set => ({
  interval: 1,
  setInterval: (newInterval: number) => set({ interval: newInterval }),
}));

export default useServerTimeStore;
