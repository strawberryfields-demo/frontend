import { uploadSongMetaDataAndGetS3URL, uploadSongToS3ParallelAPI } from "@/apis/api/musicAPI";
import { MusicMetaData, MusicUploadRequestDTO, MusicUploadResponseErrorDTO } from "@/apis/dtos/musicDto";
import { S3PresignedPostResponse } from "@/apis/dtos/s3Dto";
import { AllowedMusicExtension } from "@/types/music";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";

export const useSongUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccessStatuses, setUploadSuccessStatuses] = useState<boolean[]>([]);

  const handleMusicUpload = async (files: File[]) => {
    try {
      setIsUploading(true);
      setUploadSuccessStatuses(files.map(() => false));

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
          s3_urls: [...s3PresignedPostResponses],
        },
      } = await songUpload.mutateAsync({ music_metadatas: musicMetaDatas });

      const songUploadToS3ParallelResults = await songUploadToS3Parallel.mutateAsync({
        files,
        s3PresignedPostResponses,
      });

      const successStatusArray = songUploadToS3ParallelResults.map(
        (response) => response.status >= 200 && response.status < 300,
      );
      setUploadSuccessStatuses(successStatusArray);
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
    mutationFn: ({
      files,
      s3PresignedPostResponses,
    }: {
      files: File[];
      s3PresignedPostResponses: S3PresignedPostResponse[];
    }) => uploadSongToS3ParallelAPI(files, s3PresignedPostResponses),
    onError: (error: AxiosError) => {
      console.log(error);
      console.log("S3 업로드 일부 실패");
    },
  });

  return {
    handleMusicUpload,
    isUploading,
    uploadSuccessStatuses,
    songUpload,
    songUploadToS3Parallel,
  };
};
