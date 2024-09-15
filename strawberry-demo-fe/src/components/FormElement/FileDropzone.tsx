import React from "react";
import { Input } from "../ui/input";

type FileInputProps = React.InputHTMLAttributes<HTMLInputElement>;

//TODO: drag and drop 구현
export default function FileDropzone(props: FileInputProps) {
  return (
    <>
      <label
        htmlFor="file"
        className="inline-flex w-full h-64 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-card text-card-foreground border-2 border-dashed hover:bg-card-foreground/5  px-4 py-2"
      >
        {props.placeholder || "이 곳을 눌러 파일을 추가해주세요"}
      </label>
      <Input id="file" className="hidden" type="file" {...props} />
    </>
  );
}
