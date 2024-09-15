type FormProps = {
  children: React.ReactNode;
};

export default function Form({ children }: FormProps) {
  return <form className="flex flex-col gap-3">{children}</form>;
}
