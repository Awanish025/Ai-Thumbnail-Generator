import { createContext, useContext, useEffect, useState } from "react";
import api from "../configs/api";
import toast from "react-hot-toast";

const AuthContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => { },
    user: null,
    setUser: () => { },
    login: async () => { },
    signUp: async () => { },
    logout: async () => { },
    fetchUser: async () => { },
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signUp = async ({
        name,
        email,
        password,
    }) => {
        try {
            const { data } = await api.post("/api/auth/register", {
                name,
                email,
                password,
            });

            if (data.user) {
                setUser(data.user);
                setIsLoggedIn(true);
            }
            toast.success(data.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Registration failed");
        }
    };
    const login = async ({
        email,
        password,
    }) => {
        try {
            const { data } = await api.post("/api/auth/login", {
                email,
                password,
            });

            if (data.user) {
                setUser(data.user);
                setIsLoggedIn(true);
            }
            toast.success(data.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Login failed");
        }
    };
    const logout = async () => {
        try {
            const { data } = await api.post("/api/auth/logout");
            setUser(null);
            setIsLoggedIn(false);
            toast.success(data.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Logout failed");
        }
    };
    const fetchUser = async () => {
        try {
            const { data } = await api.get("/api/auth/verify");
            if (data.user) {
                setUser(data.user);
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            await fetchUser();
        })();
    }, []);

    const value = {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        signUp,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
