import { create } from "zustand";

type ModalState = {
  activeModals: Record<string, boolean>;
  open: (modalName: string) => void;
  close: (modalName: string) => void;
  toggle: (modalName: string) => void;
  isOpen: (modalName: string) => boolean;
};

export const useModalStore = create<ModalState>((set, get) => ({
  activeModals: {},

  open: (modalName) =>
    set((state) => ({
      activeModals: { ...state.activeModals, [modalName]: true },
    })),

  close: (modalName) =>
    set((state) => ({
      activeModals: { ...state.activeModals, [modalName]: false },
    })),

  toggle: (modalName) =>
    set((state) => ({
      activeModals: { ...state.activeModals, [modalName]: !state.activeModals[modalName] },
    })),

  isOpen: (modalName) => get().activeModals[modalName] || false,
}));
