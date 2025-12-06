import { useNavigate } from "react-router-dom";
import { api } from "@/api/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

export const SignUpSchema = z
	.object({
		username: z.string().min(4, "Full name must be at least 4 characters"),
		email: z.string().email(),
		password: z.string().min(5, "Password must be at least 5 characters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Password do not match",
	})
	.refine((data) => data.confirmPassword.length === data.password.length, {
		path: ["confirmPassword"],
		message: "Confirm password must be same length as password",
	});
export const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(5, "Password must be at least 5 character"),
});

export type SignUpData = z.infer<typeof SignUpSchema>;
export type LoginData = z.infer<typeof LoginSchema>;

export const useAuth = () => {
	const navigate = useNavigate();
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used inside AuthProivder");
	}
	const { username, setUsername, isLogin, setIsLogin } = context;

	const signUpForm = useForm<SignUpData>({
		resolver: zodResolver(SignUpSchema),
		mode: "onBlur",
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});
	const signInForm = useForm<LoginData>({
		resolver: zodResolver(LoginSchema),
		mode: "onBlur",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const signup = async (data: SignUpData) => {
		try {
			const response = await api.post("/register", data);
			console.log("signup response data: ", response);
			if (response.status == 201) {
				localStorage.setItem("token", response.data.token);
				setUsername(response.data.username);
				toast.success("User created successfully");
				navigate("/dashboard");
			} else {
			}
		} catch (error: any) {
			console.log("Error while singup: ", error);
			signUpForm.setError("root", {
				type: "server error",
				message: error.response.data.message,
			});
		}
	};

	const login = async (data: LoginData) => {
		try {
			const response = await api.post("/login", data);
			console.log("response: ", response);
			if (response.status == 200) {
				localStorage.setItem("token", response.data.token);
				setUsername(response.data.username);
				toast.success("User loging successfully");
				navigate("/dashboard");
			}
		} catch (error: any) {
			console.log(error);
			signInForm.setError("root", {
				type: "server error",
				message: error.response.data.message,
			});
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		setIsLogin(false);
		setUsername(null);
	};
	return {
		login,
		signup,
		signInForm,
		signUpForm,
		logout,
		isLogin,
		username,
	};
};
