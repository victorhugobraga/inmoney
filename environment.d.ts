export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "production" | "development";

      /**
       * @Description url da api
       * @Type string
       */
      NEXT_PUBLIC_API_URL: string;
      /**
       * @Description Se as páginas devem ser bloqueadas
       * @Type boolean
       */
      NEXT_PUBLIC_LOCK_PAGES: boolean;
    }
  }
}
