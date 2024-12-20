'use client'
import React, { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/auth/profile", { credentials: "include" });
        if (response.ok) {
          const data = await response.json();
          setId(data.Id);
            setUser(data.Profile);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking authentication", error);
        setUser(null);
      }
    };
    checkAuthStatus();
  }, [refreshTrigger]);

  const refreshAuthStatus = () => {
    setRefreshTrigger(!refreshTrigger);
  };
//   console.log(user);
  
  const register = async (name, email, gender, password, cfPassword, country) => {
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, gender, password, cfPassword, country }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/signin");
      }
    //    else if (response.ok && isDoctor) {
    //     const id = data.id;
    //   } 
      else {
        alert(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (!data || response.status === 401 || response.status === 400 || response.status === 500) {
          alert(data.error);
        } else {
        //   if (data.role === 'user') {
            setUser(data.user);
            router.push("/");
        //   }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
        const response = await fetch("http://localhost:5000/auth/logout", { credentials: "include" });
        if (response.ok) {
        //   const data = await response.json();
            setUser(null);
            router.push("/signin");
        }
      } catch (error) {
        console.error("Error checking authentication", error);
        setUser(null);
      }
  };

  return (
    <AuthContext.Provider value={{ user, id, login, logout, register, refreshAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
