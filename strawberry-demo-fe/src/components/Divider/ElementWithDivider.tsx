import "./ElementWithDivider.css";

type ElementWithDividerProps = {
  children: React.ReactNode;
};

export default function ElementWithDivider({ children }: ElementWithDividerProps) {
  return <div className="flex items-center divider-style">{children}</div>;
}
