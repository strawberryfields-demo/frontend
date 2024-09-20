import { FormHTMLAttributes } from "react";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
};

export default function Form({ children, ...formProps }: FormProps) {
  return (
    <form className="flex flex-col gap-3" {...formProps}>
      {children}
    </form>
  );
}
