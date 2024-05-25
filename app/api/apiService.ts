import { AccountUser } from "@/types/api/account";
import { DefaultResponse, LoginData } from "../../types/api/session";

export class ApiService {
  private static readonly url: string = process.env.NEXT_PUBLIC_API_URL;

  static async signUp(
    name: string,
    email: string,
    password: string
  ): Promise<DefaultResponse> {
    const response = await fetch(`${this.url}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json-patch+json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      return {
        success: true,
      };
    }
    return {
      success: false,
      message: "Falha ao conectar ao servidor. Tente novamente mais tarde.",
    };
  }

  static async login(
    email: string,
    password: string
  ): Promise<DefaultResponse<LoginData>> {
    const response = await fetch(`${this.url}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data: LoginData = await response.json();

    if (response.ok)
      return {
        success: true,
        data: {
          token: data.token,
          expiration_date: new Date(data.expiration_date),
        },
      };

    return {
      success: false,
      message: data.detail ?? "Email ou senha inválidos",
    };
  }

  static async getUser(token: string): Promise<DefaultResponse<AccountUser>> {
    const response = await fetch(`${this.url}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data: AccountUser = await response.json();

    if (response.ok) {
      return {
        success: true,
        data: data,
      };
    }

    return {
      success: false,
      message: data.detail ?? "Email ou senha inválidos",
    };
  }

  static async submitNewsletter(email: string): Promise<DefaultResponse> {
    const response = await fetch(`${this.url}/user/newsletter?email=${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return {
        success: true,
      };
    }
    return {
      success: false,
      message: "Falha ao conectar ao servidor. Tente novamente mais tarde.",
    };
  }
}
