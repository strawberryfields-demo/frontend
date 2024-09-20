import { LabelHTMLAttributes } from "react";
import { Label } from "../ui/label";
import FormErrorMessage from "./FormErrorMessage";

type FormElement = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  htmlFor: string;
  errorMessage?: string;
  children: React.ReactNode;
};

export default function FormElement({ children, label, htmlFor, errorMessage, ...props }: FormElement) {
  return (
    <>
      <Label {...props} htmlFor={htmlFor}>
        {label}
      </Label>
      {children}
      <FormErrorMessage message={errorMessage} />
    </>
  );
}
