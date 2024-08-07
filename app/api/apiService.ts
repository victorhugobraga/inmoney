import { AccountUser } from "@/types/api/account";
import { Balance } from "@/types/api/balance";
import { Payment } from "@/types/api/wallet";
import Cookies from "js-cookie";
import { DefaultResponse, LoginData } from "../../types/api/session";

export class ApiService {
  private readonly url: string = process.env.NEXT_PUBLIC_API_URL;
  private token: string;

  public constructor(token?: string) {
    this.token = token ?? Cookies.get("inmoney_session") ?? "tokennotfound";
  }

  public async signUp(
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

  public async login(
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

  public async getUser(token: string): Promise<DefaultResponse<AccountUser>> {
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

  public async submitNewsletter(email: string): Promise<DefaultResponse> {
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

  public async increaseRevenue(
    addRevenue: Payment
  ): Promise<DefaultResponse> {
    const response = await fetch(`${this.url}/payment/posting`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token.toString(),
      },
      body: JSON.stringify(addRevenue),
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

  public async getBalance(): Promise<DefaultResponse<Balance>> {
    try {
      const response = await fetch(`${this.url}/user/balances`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          data: data,
        };
      }

      return {
        success: false,
        message: "Erro ao buscar saldo",
      };
    } catch (e) {
      return {
        success: false,
        message: "Erro na requsição de saldo: " + e,
      };
    }
  }
}
