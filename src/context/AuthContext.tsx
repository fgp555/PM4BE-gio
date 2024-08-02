'use client';
import { userSessionProps } from '@/interfaces/IAuth';
import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextProps {
    dataUser: userSessionProps | null;
    setDataUser: (userData: userSessionProps | null) => void;
}

const AuthContext = createContext<AuthContextProps>({
    dataUser: null,
    setDataUser: () => { },
});

interface AuthProviderProps {
    children: React.ReactElement;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<userSessionProps | null>(null);

    useEffect(() => {
        if (userData) {
            localStorage.setItem('userSession', JSON.stringify(userData));
        }
    }, [userData]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const data = localStorage.getItem('userSession');
            setUserData(JSON.parse(data!));
        }
    }, [])

    return (
        <AuthContext.Provider value={{ dataUser: userData, setDataUser: setUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext)