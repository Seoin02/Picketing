import { create } from 'zustand';

const useServerTimeStore = create(set => ({
  interval: 1,
  setInterval: (newInterval: number) => set({ interval: newInterval }),
}));

export default useServerTimeStore;
