import { useManageMultipleFile } from "@/hooks/useManageMultipleFile";
import UploadMusicModal from "@/layouts/ModalLayout/UploadMusicModal";

export default function UploadMusicModalContainer() {
  const { fileList: musicList, addFile: handleMusicChange, removeFile: handleMusicRemove } = useManageMultipleFile();
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
        console.log("upload", musicList);
      }}
    />
  );
}
