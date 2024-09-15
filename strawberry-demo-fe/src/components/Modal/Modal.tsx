import { ReactNode } from "react";
import DefaultModal from "./DefaultModal";
import { useModalStore } from "@/stores/useModalStore";

type ModalProps = {
  modalName: string;
  isCloseClickOutside?: boolean;
  children: ReactNode;
};

export default function Modal({ modalName, isCloseClickOutside, children }: ModalProps) {
  const isOpen = useModalStore((state) => state.isOpen(modalName));
  const close = useModalStore((state) => state.close);
  return (
    <DefaultModal
      isOpen={isOpen}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          close(modalName);
        }
      }}
      isCloseClickOutside={isCloseClickOutside}
    >
      {children}
    </DefaultModal>
  );
}
