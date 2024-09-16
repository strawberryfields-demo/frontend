import { DataTable } from "@/components/Table/DataTable";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import UploadMusicModal from "@/pages/SongPage/UploadMusicModalContainer";
import { useModalStore } from "@/stores/useModalStore";
import { Music } from "@/types/music";
import { secondToTime } from "@/utils/time";
import { ColumnDef } from "@tanstack/react-table";

import musiclistMock from "@/mocks/musiclist.json";
import Section from "@/components/PageLayout/Section";
import { useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import { usePagination } from "@/hooks/usePagination";
import { PageTitle } from "@/components/PageLayout/PageElement";

const columns: ColumnDef<Music>[] = [
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
    accessorKey: "name",
    meta: {
      headerClassName: "w-1/2",
    },
  },
  {
    header: "길이",
    accessorKey: "duration",
    cell: ({ row }) => {
      const duration = row.getValue<number>("duration");
      return <p>{secondToTime(duration)}</p>;
    },
  },
  {
    header: "재생",
    accessorKey: "musicUrl",
    cell: ({ row }) => {
      const musicUrl = row.getValue<string>("musicUrl");
      return <audio src={musicUrl} controls />;
    },
    meta: {
      headerClassName: "w-4/12",
    },
  },
];

export default function SongLayout() {
  const pagination = usePagination(1, 1, 10, 5);
  const toggleModal = useModalStore((state) => state.toggle);
  const [musicList, setMusicList] = useState(musiclistMock.items);

  const handleMusicDelete = (selectedRows: Music[]) => {
    setMusicList((prev) => prev.filter((item) => !selectedRows.includes(item)));
  };

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
          data={musicList}
          onSelectedRowDelete={handleMusicDelete}
          pagination={pagination}
        />
      </Section>
      <UploadMusicModal />
    </>
  );
}
