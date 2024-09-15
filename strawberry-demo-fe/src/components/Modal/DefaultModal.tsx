import { Dialog as RedixDialog, DialogOverlay, DialogContent, DialogClose } from "@/components/ui/dialog";
import { ReactNode } from "react";
import Portal from "../Portal/Portal";

type DefaultModalProps = {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  isCloseClickOutside?: boolean;
  children: ReactNode;
};

export default function DefaultModal({ isOpen, onOpenChange, isCloseClickOutside, children }: DefaultModalProps) {
  return (
    <>
      <RedixDialog open={isOpen} onOpenChange={onOpenChange}>
        <Portal>
          <DialogOverlay />
          <DialogContent
            className="overflow-auto max-h-[calc(100%-10rem)]"
            onInteractOutside={(e) => {
              if (!isCloseClickOutside) e.preventDefault();
            }}
          >
            <DialogClose onClick={() => onOpenChange?.(false)} />
            {children}
          </DialogContent>
        </Portal>
      </RedixDialog>
    </>
  );
}
