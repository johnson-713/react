import { create } from "zustand";

export const useAppStore = create((set) => ({
    count: 0,
    submit: undefined,
    user: "",
    increase: () => set((val) => ({count: val.count+1})),
    updateStr: () => set((s) => set({user: s.user})),
    handleSubmit: () => set((fn) => ({submit: fn})),
}))