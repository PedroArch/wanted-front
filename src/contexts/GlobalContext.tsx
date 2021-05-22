import { createContext, useState, ReactNode, useEffect } from 'react';
import api from '../services/api';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  state: string;
  birthday: string;
  avatar: string;
  password: string;
}

interface Freelancer {
  id: number;
  about: string;
  latitude: number;
  longitude: number;
  mobile: string;
  open_on_weekends: boolean;
  portfolio: string;
  type: string;
  images: Image[];
  user: User;
}

interface Image {
  id: number;
  url: string;
}

interface GlobalContextData {
  isLogged: boolean;
  freelancers: Freelancer[] 
}

interface GlobalContextProps {
  children: ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextData);

export function GlobalContextProvider({ children } : GlobalContextProps ) {

  const [isLogged] = useState(false);
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

