import { useManageMultipleFile } from "@/hooks/useManageMultipleFile";
import { useSongUpload } from "@/hooks/useReactQuery/useSong";
import UploadMusicModal from "@/layouts/ModalLayout/UploadMusicModal";

export default function UploadMusicModalContainer() {
  const { fileList: musicList, addFile: handleMusicChange, removeFile: handleMusicRemove } = useManageMultipleFile();
  const { handleMusicUpload, isUploading, songUpload, songUploadToS3Parallel } = useSongUpload();

  const handleMusicDelete = (selectedRows: File[]) => {
    selectedRows.forEach((file) => {
      handleMusicRemove(file);
    });
  };

  return (
    <UploadMusicModal
      musicList={musicList}
      onMusicChange={handleMusicChange}
      onMusicDelete={handleMusicDelete}
      onUpload={() => {
        handleMusicUpload(musicList);
      }}
    />
  );
}
