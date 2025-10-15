'use client';

import { useState, useEffect } from 'react';
import { MOCKUP_CREDENTIALS } from './mockup-data';

export interface SessionData {
  username: string;
  isLoggedIn: boolean;
}

const SESSION_KEY = 'ahu_yaman_session';

/**
 * Frontend-only session check
 */
export function verifySession(): SessionData | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) {
      return null;
    }

    const sessionData = JSON.parse(session);
    return sessionData;
  } catch (error) {
    console.error('Session verification failed:', error);
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem('ahu_yaman_remembered_username');
    localStorage.removeItem('ahu_yaman_remember_me');
  }
}

export function login(username: string, password: string): boolean {
  if (username === MOCKUP_CREDENTIALS.username && password === MOCKUP_CREDENTIALS.password) {
    const sessionData: SessionData = {
      username,
      isLoggedIn: true
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    return true;
  }
  return false;
}

// Client-side auth hook
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<SessionData | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    try {
      const session = verifySession();
      if (session) {
        setIsAuthenticated(true);
        setUser(session);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const loginUser = (username: string, password: string) => {
    const success = login(username, password);
    if (success) {
      checkAuth();
    }
    return success;
  };

  const logoutUser = () => {
    logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    isLoading,
    user,
    login: loginUser,
    logout: logoutUser,
    checkAuth
  };
}
