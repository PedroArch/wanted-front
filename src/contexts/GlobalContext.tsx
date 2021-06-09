import { createContext, useState, ReactNode, useEffect } from 'react';

import api from '../services/api';

import { defaultUser } from '../utils/userDefault';

import FreelancerType from '../types/FreelancerType';
import User from '../types/User';

interface GlobalContextData {
  isLogged: boolean;
  setIsLogged: (boolean: boolean) => void;
  activeUser: User;
  setActiveUser: (user: User) => void;
  freelancers: FreelancerType[]; 
  setFreelancers: (freelancers: FreelancerType[]) => void;
}

interface GlobalContextProps {
  children: ReactNode;
}


export const GlobalContext = createContext({} as GlobalContextData);

export function GlobalContextProvider({ children } : GlobalContextProps ) {
  

  const [isLogged, setIsLogged] = useState(false);
  const [freelancers, setFreelancers] = useState<FreelancerType[]>([])
  const [activeUser, setActiveUser] = useState<User>(defaultUser)

  useEffect( () => {
    async function fetch() {
      const response = await api.get('freelancers')
      setFreelancers(response.data)
    }
    fetch()
    const localStorageUserLogged = localStorage.getItem('@Wanted:isLogged')
    if (localStorageUserLogged) {
      setIsLogged(JSON.parse(localStorageUserLogged))
    }
  }, [])

  return (
    <GlobalContext.Provider value={{
      isLogged,
      setIsLogged,
      freelancers,
      setFreelancers,
      activeUser,
      setActiveUser,
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

