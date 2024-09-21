import FileDropzone from "@/components/FormElement/FileDropzone";
import Modal from "@/components/Modal/Modal";
import { ModalTitle } from "@/components/Modal/ModalElement";
import { DataTable } from "@/components/Table/DataTable";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { ColumnDef } from "@tanstack/react-table";
import { Loader2 } from "lucide-react";
import { Form } from "react-router-dom";

type UploadMusicModalProps = {
  musicList: File[];
  onMusicChange: (music: FileList | File[]) => void;
  onMusicDelete: (selectedRows: File[]) => void;
  onUpload: () => void;
  isUploading?: boolean;
};

const uploadMusicTableColumns: ColumnDef<File>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      headerClassName: "w-1/12",
    },
  },
  {
    header: "음악 제목",
    accessorKey: "name",
    cell: ({ row }) => {
      const name = row.getValue<string>("name");
      return <p>{name}</p>;
    },
    size: 100,
  },
];

export default function UploadMusicModal({
  musicList,
  onMusicChange,
  onMusicDelete,
  onUpload,
  isUploading,
}: UploadMusicModalProps) {
  const handleMusicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onMusicChange(e.target.files);
    }
  };

  const handleMusicDelete = (selectedRows: File[]) => {
    onMusicDelete(selectedRows);
  };

  return (
    <Modal modalName={"음악업로드"}>
      <DialogHeader>
        <ModalTitle>음악 업로드</ModalTitle>
        <DialogDescription>음악 파일을 추가하여 업로드할 수 있습니다.</DialogDescription>
      </DialogHeader>
      <Form>
        <FileDropzone onChange={handleMusicChange} multiple accept="audio/*" />
      </Form>
      {musicList && musicList.length > 0 && (
        <DataTable
          title="업로드 리스트"
          columns={uploadMusicTableColumns}
          data={musicList}
          onSelectedRowDelete={handleMusicDelete}
        />
      )}
      <Button onClick={onUpload} disabled={isUploading}>
        {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        업로드
      </Button>
    </Modal>
  );
}
