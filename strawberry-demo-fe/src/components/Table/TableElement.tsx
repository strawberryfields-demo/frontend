type TableElementProps = {
  title?: string;
};
export function TableTitle({ title }: TableElementProps) {
  return <h3 className="text-base text-slate-600 font-semibold">{title}</h3>;
}
