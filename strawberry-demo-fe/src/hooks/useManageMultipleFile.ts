import { useState } from "react";

//TODO: AcceptFileTypes type 정의
export const useManageMultipleFile = (acceptFileTypes?: string[]) => {
  const [fileList, setFileList] = useState<File[]>([]);

  const addFile = (files: FileList | File[] | null) => {
    const acceptedFiles = filterByAcceptedFiles(files);
    setFileList((prevList) => [...prevList, ...acceptedFiles]);
  };

  const replaceNewAddedFile = (files: FileList | File[] | null) => {
    const acceptedFiles = filterByAcceptedFiles(files);
    setFileList(acceptedFiles);
  };

  const removeFile = (file: File) => {
    setFileList((prevList) => prevList.filter((f) => f !== file));
  };

  const clearFile = () => {
    setFileList([]);
  };

  const filterByAcceptedFiles = (files: FileList | File[] | null) => {
    if (!files) return [];
    return Array.from(files).filter((file) => {
      if (acceptFileTypes) {
        return acceptFileTypes.includes(file.type);
      }
      return true;
    });
  };

  return { fileList, addFile, replaceNewAddedFile, removeFile, clearFile };
};
