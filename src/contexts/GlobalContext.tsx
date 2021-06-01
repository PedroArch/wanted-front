import { createContext, useState, ReactNode, useEffect } from 'react';

import api from '../services/api';

import { defaultUser } from '../utils/userDefault';

import FreelancerType from '../types/FreelancerType';
import User from '../types/User';

interface GlobalContextData {
  isLogged: boolean;
  user: User;
  setUser: (user: User) => void;
  setFreelancers: (freelancers: FreelancerType[]) => void;
  freelancers: FreelancerType[]; 
}

interface GlobalContextProps {
  children: ReactNode;
}


export const GlobalContext = createContext({} as GlobalContextData);

export function GlobalContextProvider({ children } : GlobalContextProps ) {
  

  const [isLogged] = useState(false);
  const [freelancers, setFreelancers] = useState<FreelancerType[]>([])
  const [user, setUser] = useState(defaultUser)

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
      freelancers,
      user,
      setUser,
      setFreelancers
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

