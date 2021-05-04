import { createContext, useState, ReactNode } from 'react';

interface GlobalContextData {
  isLogged: boolean;
}

interface GlobalContextProps {
  children: ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextData);

export function GlobalContextProvider({ children } : GlobalContextProps ) {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <GlobalContext.Provider value={{
      isLogged,
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

