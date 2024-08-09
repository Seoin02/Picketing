import { create } from 'zustand';

const useServerTimeStore = create(set => ({
  serverTimes: 0,
  setServerTimes: (time: number) => set({ serverTimes: time }),
}));

export default useServerTimeStore;
