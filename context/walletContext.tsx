import { createContext } from "react";

export const WalletContext = createContext({});

interface WalletProviderProps {
  children: React.ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  return <WalletContext.Provider value={{}}>{children}</WalletContext.Provider>;
}
