import { DataTable } from "@/components/Table/DataTable";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import UploadMusicModal from "@/pages/SongPage/UploadMusicModalContainer";
import { useModalStore } from "@/stores/useModalStore";
import { ColumnDef } from "@tanstack/react-table";

import Section from "@/components/PageLayout/Section";
import { usePagination } from "@/hooks/usePagination";
import { PageTitle } from "@/components/PageLayout/PageElement";
import { Music } from "@/types/music";

type songTableData = Pick<Music, "id" | "title" | "file_path">;
const columns: ColumnDef<songTableData>[] = [
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
      headerClassName: "w-8",
    },
  },
  {
    header: "음악명",
    accessorKey: "title",
    meta: {
      headerClassName: "w-1/2",
    },
  },

  {
    header: "재생",
    accessorKey: "file_path",
    cell: ({ row }) => {
      const musicUrl = row.getValue<string>("file_path");
      return <audio src={musicUrl} controls />;
    },
    meta: {
      headerClassName: "w-4/12",
    },
  },
];

type SongLayoutProps = {
  songList: songTableData[];
  pagination: ReturnType<typeof usePagination>;
};

export default function SongLayout({ songList, pagination }: SongLayoutProps) {
  const toggleModal = useModalStore((state) => state.toggle);

  return (
    <>
      <Section>
        <div className="flex justify-between items-center gap-6 pb-8">
          <PageTitle title="업로드 곡 목록 조회" />
          <div className="flex justify-end gap-2">
            <Button className="min-w-52" variant="outline" onClick={() => toggleModal("음악업로드")}>
              새 곡 업로드
            </Button>
          </div>
        </div>
        <DataTable
          title="업로드 목록 관리"
          columns={columns}
          data={songList}
          onSelectedRowDelete={() => {}}
          pagination={pagination}
          placeholder="등록된 음악이 없습니다."
        />
      </Section>
      <UploadMusicModal />
    </>
  );
}
