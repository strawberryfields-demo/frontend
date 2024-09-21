import { useManageMultipleFile } from "@/hooks/useManageMultipleFile";
import { useSongUpload } from "@/hooks/useReactQuery/useSong";
import UploadMusicModal from "@/layouts/ModalLayout/UploadMusicModal";
import { useEffect } from "react";

export default function UploadMusicModalContainer() {
  const { fileList: musicList, addFile: handleMusicChange, removeFile: handleMusicRemove } = useManageMultipleFile();
  const { handleMusicUpload, isUploading, uploadSuccessStatuses } = useSongUpload();

  const handleMusicDelete = (selectedRows: File[]) => {
    selectedRows.forEach((file) => {
      handleMusicRemove(file);
    });
  };

  useEffect(() => {
    uploadSuccessStatuses.forEach((status, index) => {
      if (status) {
        handleMusicRemove(musicList[index]);
      }
    });
  }, [uploadSuccessStatuses]);

  return (
    <UploadMusicModal
      musicList={musicList}
      onMusicChange={handleMusicChange}
      onMusicDelete={handleMusicDelete}
      onUpload={() => {
        handleMusicUpload(musicList);
      }}
      isUploading={isUploading}
    />
  );
}
