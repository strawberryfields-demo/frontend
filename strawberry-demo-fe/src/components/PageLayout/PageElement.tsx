type PageTitleProps = { title: string; className?: string };

export function PageTitle({ title, className }: PageTitleProps) {
  return <h1 className={`text-4xl ${className} font-extrabold`}>{title}</h1>;
}
