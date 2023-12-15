"use client"

import { supabase } from '@/utils/supabase';
import { Session } from '@supabase/supabase-js';
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