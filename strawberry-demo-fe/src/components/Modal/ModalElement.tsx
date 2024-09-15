import { DialogTitle } from "@radix-ui/react-dialog";

export function ModalTitle({ children }: { children: React.ReactNode }) {
  return <DialogTitle className="text-xl font-semibold">{children}</DialogTitle>;
}
