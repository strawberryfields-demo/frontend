import { uploadSongMetaDataAndGetS3URL, uploadSongToS3ParallelAPI } from "@/apis/api/musicAPI";
import { MusicMetaData, MusicUploadRequestDTO, MusicUploadResponseErrorDTO } from "@/apis/dtos/musicDto";
import { AllowedMusicExtension } from "@/types/music";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";

export const useSongUpload = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleMusicUpload = async (files: File[]) => {
    try {
      setIsUploading(true);

      // 메타데이터 추출
      const musicMetaDatas = files.map<MusicMetaData>((file) => {
        const [name, extension] = file.name.split(".");
        return {
          name: name,
          size: file.size,
          extension: extension as AllowedMusicExtension,
        };
      });

      // 메타데이터 업로드 후 S3 URL 받아오기
      const {
        data: {
          s3_urls: [...s3Urls],
        },
      } = await songUpload.mutateAsync({ music_metadatas: musicMetaDatas });

      const songUploadToS3ParallelResults = await songUploadToS3Parallel.mutateAsync({ files, s3Urls });
    } finally {
      setIsUploading(false);
    }
  };

  const songUpload = useMutation({
    mutationFn: (data: MusicUploadRequestDTO) => uploadSongMetaDataAndGetS3URL(data),
    onError: (error: AxiosError<MusicUploadResponseErrorDTO>) => {
      console.log(error.response?.data);
    },
  });

  const songUploadToS3Parallel = useMutation({
    mutationFn: ({ files, s3Urls }: { files: File[]; s3Urls: string[] }) => uploadSongToS3ParallelAPI(files, s3Urls),
    onError: (error: AxiosError) => {
      console.log(error);
      console.log("S3 업로드 일부 실패");
    },
  });

  return {
    handleMusicUpload,
    isUploading,
    songUpload,
    songUploadToS3Parallel,
  };
};
