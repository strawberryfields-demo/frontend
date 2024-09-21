interface S3PresignedPostFields {
  key: string;
  policy: string;
  "x-amz-algorithm": string;
  "x-amz-credential": string;
  "x-amz-date": string;
  "x-amz-signature": string;
}

export interface S3PresignedPostResponse {
  url: string;
  fields: S3PresignedPostFields;
}
