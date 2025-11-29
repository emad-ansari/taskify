import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "./hooks/useAuth";

import Dashboard from "./pages/dashboard";
import Tasks from "./pages/tasks";
import TaskDetail from "./pages/task-detail";
import Login from "./pages/login";
import Signup from "./pages/signup";

const App = () => {
	return (
		<AuthProvider>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/tasks" element={<Tasks />} />
						<Route path="/tasks/:id" element={<TaskDetail />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</BrowserRouter>
			</TooltipProvider>
		</AuthProvider>
	);
};

export default App;
