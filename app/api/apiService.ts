export class ApiService {
  private static readonly url: string = process.env.NEXT_PUBLIC_API_URL;

  static async signUp(name: string, email: string, password: string) {
    const response = await fetch(`${this.url}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json-patch+json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    return await response.json();
  }

  static async login(email: string, password: string) {
    const response = await fetch(`${this.url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return await response.json();
  }
}
