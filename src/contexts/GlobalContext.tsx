import { createContext, useState, ReactNode, useEffect } from 'react';

import api from '../services/api';

import { defaultUser } from '../utils/userDefault';

import FreelancerType from '../types/FreelancerType';
import User from '../types/User';

interface GlobalContextData {
  isLogged: boolean;
  activeUser: User;
  setActiveUser: (user: User) => void;
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
  const [activeUser, setActiveUser] = useState(defaultUser)

  useEffect( () => {
    async function fetch() {
      const response = await api.get('freelancers')
      setFreelancers(response.data)
    }
    fetch()
  }, [])

  useEffect( () => {
    async function fetch() {
      const response = await api.get('users/3')
      setActiveUser(response.data)
    }
    fetch()
  }, [activeUser])

  return (
    <GlobalContext.Provider value={{
      isLogged,
      freelancers,
      activeUser,
      setActiveUser,
      setFreelancers
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

