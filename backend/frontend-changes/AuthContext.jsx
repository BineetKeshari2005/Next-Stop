// src/context/AuthContext.jsx
// Replaces all Firebase auth (createUserWithEmailAndPassword, signInWithEmailAndPassword, etc.)

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  // On mount, verify token with backend
  useEffect(() => {
    const verify = async () => {
      if (!token) { setLoading(false); return; }
      try {
        const res = await fetch(`${API}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          logout(); // token invalid/expired
        }
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };
    verify();
  }, []);

  const register = async (name, email, password) => {
    const res = await fetch(`${API}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    setToken(data.token);
    setUser({ _id: data._id, name: data.name, email: data.email });
    localStorage.setItem('token', data.token);
  };

  const login = async (email, password) => {
    const res = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    setToken(data.token);
    setUser({ _id: data._id, name: data.name, email: data.email });
    localStorage.setItem('token', data.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
