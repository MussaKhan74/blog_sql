import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(
      `${import.meta.env.VITE_REACT_BASE_URL}/auth/login`,
      inputs
    );
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    const res = await axios.post(
      `${import.meta.env.VITE_REACT_BASE_URL}/auth/logout`
    );
    setCurrentUser(null);
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
