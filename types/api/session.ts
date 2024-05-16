export interface DefaultResponse<T = {}> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface ErrorSchema {
  title?: string;
  status?: number;
  detail?: string;
}

export interface LoginData extends ErrorSchema {
  token: string;
  expiration_date: Date;
}
