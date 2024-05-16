import { ErrorSchema } from "./session";

export interface AccountUser extends ErrorSchema {
  name: string;
  email: string;
  nick_name: string;
}
