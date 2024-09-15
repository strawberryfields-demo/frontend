import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";
import Modal from "./Modal";
import Form from "../FormElement/Form";
import { ModalTitle } from "./ModalElement";
import { DataTable } from "../Table/DataTable";
import FileDropzone from "../FormElement/FileDropzone";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";

type UploadMusicModalProps = {
  musicList: File[];
  onMusicChange: (music: FileList | File[]) => void;
  onMusicDelete: (selectedRows: File[]) => void;
  onUpload: () => void;
};

const musicTableColumns: ColumnDef<File>[] = [
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

export default function UploadMusicModal({ musicList, onMusicChange, onMusicDelete, onUpload }: UploadMusicModalProps) {
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
        <DataTable columns={musicTableColumns} data={musicList} onSelectedRowDelete={handleMusicDelete} />
      )}
      <Button type="submit" onClick={onUpload}>
        업로드
      </Button>
    </Modal>
  );
}
