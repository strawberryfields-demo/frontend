import { LabelHTMLAttributes } from "react";
import { Label } from "../ui/label";

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
};

export default function FormLabel({ children, label, htmlFor, ...props }: FormLabelProps) {
  return (
    <>
      <Label {...props} htmlFor={htmlFor}>
        {label}
      </Label>
      {children}
    </>
  );
}
