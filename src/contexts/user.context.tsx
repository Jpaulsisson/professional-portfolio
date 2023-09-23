"use client"

import { supabase } from '@/app/utils/supabase';
import { authStateChangeListener } from '@/app/utils/supabase';
import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

type UserContextProviderProps = {
  children: ReactNode;
}

type UserContext = {
  currentSession: object | null;
  setCurrentSession: React.Dispatch<React.SetStateAction<object | null>>;
  appElement: HTMLElement | undefined;
}


const UserContext = createContext<UserContext | null>(null);

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [currentSession, setCurrentSession] = useState<object | null>(null);
  const [appElement, setAppElement] = useState<HTMLElement | undefined>(undefined);

  useEffect(() => {
    if (document) {
      const newAppElement = document.getElementById('app') || undefined;
      if (newAppElement) setAppElement(newAppElement);
    }
  }, [])

  useEffect(() => {
      const unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
          setCurrentSession(session);
        }
        if (!session) {
          setCurrentSession(null);
        }
      });
  }, [])
  

  return (
    <UserContext.Provider
      value={{
        currentSession,
        setCurrentSession,
        appElement,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a UserContextProvider"
    );
  }
  return context;
}