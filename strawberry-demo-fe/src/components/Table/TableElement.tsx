type TableElementProps = {
  title?: string;
};
export function TableTitle({ title }: TableElementProps) {
  return <h3 className="text-lg text-slate-600 font-semibold">{title}</h3>;
}
