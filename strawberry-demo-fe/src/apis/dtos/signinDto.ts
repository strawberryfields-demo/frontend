export interface SignInRequestDTO {
  email: string;
  password: string;
}

export interface SignInResponseDTO {
  access_token: string;
}

export interface SignInResponseErrorDTO {
  email?: string[];
  password?: string[];
}
