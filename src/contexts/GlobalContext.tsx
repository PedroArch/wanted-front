import { createContext, useState, ReactNode, useEffect } from 'react';
import api from '../services/api';

import FreelancerType from '../types/FreelancerType';

interface GlobalContextData {
  isLogged: boolean;
  freelancers: FreelancerType[] 
}

interface GlobalContextProps {
  children: ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextData);

export function GlobalContextProvider({ children } : GlobalContextProps ) {

  const [isLogged] = useState(true);
  const [freelancers, setFreelancers] = useState([])

  useEffect( () => {
    async function fetch() {
      const response = await api.get('freelancers')
      setFreelancers(response.data)
    }
    fetch()
  }, [])

  return (
    <GlobalContext.Provider value={{
      isLogged,
      freelancers
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

