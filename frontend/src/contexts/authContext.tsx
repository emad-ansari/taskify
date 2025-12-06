import { createContext, useState, useEffect, type SetStateAction } from "react";

interface AuthContextType {
	isLogin: boolean;
	setIsLogin: React.Dispatch<SetStateAction<boolean>>;
	username: string | null;
	setUsername: React.Dispatch<SetStateAction<string | null>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLogin, setIsLogin] = useState<boolean>(() => {
		return !!localStorage.getItem("token");
	});
	const [username, setUsername] = useState<string | null>(null);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setIsLogin(true);
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{ isLogin, setIsLogin, username, setUsername }}
		>
			{children}
		</AuthContext.Provider>
	);
};
