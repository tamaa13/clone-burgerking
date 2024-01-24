import { create } from 'zustand'

type State = {
    cartOrder: number;
    setCartOrder: (value: number) => void;
};

const useStore = create<State>((set) => ({
    cartOrder: 0,
    setCartOrder: (cartOrder: number) => set(() => ({ cartOrder: cartOrder })),
}))

export default useStore