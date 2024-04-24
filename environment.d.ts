export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "production" | "development";

      /**
       * @Description Se estiver rodando o checkout local, ou em um container externo que está usando subdominio (exemplo carrinho.) pode usar esse campo para especificar ele (com o "." no final)
       * @Sass Não se aplica
       * @Type string
       */
      NEXT_PUBLIC_API_URL: string;
    }
  }
}
