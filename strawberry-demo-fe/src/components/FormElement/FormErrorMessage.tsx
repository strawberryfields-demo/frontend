type FormErrorMessageProps = {
  message?: string;
};

export default function FormErrorMessage({ message }: FormErrorMessageProps) {
  return <span className=" text-sm text-red-400">{message || " "}</span>;
}
