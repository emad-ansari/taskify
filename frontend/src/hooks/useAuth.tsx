import { createContext, useState, useEffect, type SetStateAction, useContext } from "react";

interface AuthContextType {
	isLogin: boolean;
	setIsLogin: React.Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLogin, setIsLogin] = useState<boolean>(false);
    
	useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
			setIsLogin(true);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ isLogin, setIsLogin }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Auth context must be used within Auth provider");
    }
    return context;
}
