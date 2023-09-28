"use client"

import { supabase } from '@/utils/supabase';
import { authStateChangeListener } from '@/utils/supabase';
import { Session, UserMetadata } from '@supabase/supabase-js';
import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

type UserContextProviderProps = {
  children: ReactNode;
}

type UserContext = {
  currentSession: object | null;
  setCurrentSession: React.Dispatch<React.SetStateAction<Session | null>>;
  appElement: HTMLElement | undefined;
  currentUsername: string | null;
  currentUserId: string | null;
  setPreferredTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserContext = createContext<UserContext | null>(null);

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const [appElement, setAppElement] = useState<HTMLElement | undefined>(undefined);
  const [currentUsername, setcurrentUsername] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [preferredTheme, setPreferredTheme] = useState<string | null>(null);

  useEffect(() => {
    if (document) {
      const newAppElement = document.getElementById('app') || undefined;
      if (newAppElement) setAppElement(newAppElement);
    }
  }, [])

  // useEffect(() => {
  //   if (preferredTheme === 'dark') {
  //     document.documentElement.style.setProperty('--primaryBg', 'hsl(240, 5.9%, 10%)');
  //     document.documentElement.style.setProperty('--primaryFont', 'hsl(34deg, 78%, 91%)');
  //     document.documentElement.style.setProperty('--accentOrange', 'hsl(15deg, 70%, 59%)');
  //     document.documentElement.style.setProperty('--accentGreen', 'hsl(141,78.9%,85.1%)');
  //     document.documentElement.style.setProperty('--accentBlue', 'hsl(217deg, 50%, 50%)');
  //   };

  //   if (preferredTheme === 'blue') {
  //     document.documentElement.style.setProperty('--primaryBg', 'hsl(202, 63%, 18%)');
  //     document.documentElement.style.setProperty('--primaryFont', 'hsl(34, 58%, 78%)');
  //     document.documentElement.style.setProperty('--accentOrange', 'hsl(32, 67%, 40%)');
  //     document.documentElement.style.setProperty('--accentGreen', 'hsl(134, 35%, 57%)');
  //     document.documentElement.style.setProperty('--accentBlue', 'hsl(358, 43%, 66%)');
  //   }
  // })

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
  
  useEffect(() => {
    if (currentSession !== null) {
      setcurrentUsername(currentSession.user.user_metadata.name);
      setCurrentUserId(currentSession.user.id);
    }
  }, [currentSession])

  return (
    <UserContext.Provider
      value={{
        currentSession,
        setCurrentSession,
        appElement,
        currentUsername,
        currentUserId,
        setPreferredTheme
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