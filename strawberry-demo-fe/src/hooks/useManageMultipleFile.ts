import { useState } from "react";

//TODO: AcceptFileTypes type 정의
export const useManageMultipleFile = (acceptFileTypes?: string[]) => {
  const [fileList, setFileList] = useState<File[]>([]);

  const addFile = (files: FileList | null) => {
    if (files) {
      const acceptedFiles = Array.from(files).filter((file) => {
        if (acceptFileTypes) {
          return acceptFileTypes.includes(file.type);
        }
        return true;
      });
      setFileList((prevList) => [...prevList, ...acceptedFiles]);
    }
  };

  const removeFile = (file: File) => {
    setFileList((prevList) => prevList.filter((f) => f !== file));
  };

  const clearFile = () => {
    setFileList([]);
  };

  return { fileList, addFile, removeFile, clearFile };
};
