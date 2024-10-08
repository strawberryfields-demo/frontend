type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return <section className="max-w-screen-xl p-16 mx-auto">{children}</section>;
}
