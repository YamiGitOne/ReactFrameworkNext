import { create } from 'zustand';

interface BearsState {
    bears: number;
    increasePopulation: () => void;
}
export const useBearsStore = create<BearsState>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1}))
}));