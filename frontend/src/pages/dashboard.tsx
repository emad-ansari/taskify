import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { StatCard } from "@/components/common/stat-card";
import { PriorityBadge } from "@/components/common/priority-badge";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	ListTodo,
	CheckCircle2,
	AlertCircle,
	Clock,
} from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const recentTasks = [
	{
		id: 1,
		title: "Complete Q3 Report",
		dueDate: "2024-07-15",
		priority: "High" as const,
		checked: false,
	},
	{
		id: 2,
		title: "Schedule Team Meeting",
		dueDate: "2024-07-10",
		priority: "Medium" as const,
		checked: false,
	},
	{
		id: 3,
		title: "Review UI Mockups",
		dueDate: "2024-07-22",
		priority: "High" as const,
		checked: false,
	},
	{
		id: 4,
		title: "Update Project Documentation",
		dueDate: "2024-07-25",
		priority: "Low" as const,
		checked: false,
	},
	{
		id: 5,
		title: "Onboard New Team Member",
		dueDate: "2024-07-18",
		priority: "Medium" as const,
		checked: false,
	},
];

const Dashboard = () => {
	const {isLogin} = useAuth();
	const navigate = useNavigate();
	
	useEffect(() => {
		if (!isLogin) {
			navigate('/')
		}
	}, [])
	return (
		<div className="min-h-screen flex flex-col">
			<Header />

			<main className="flex-1 container mx-auto px-6 py-8">
				<div className="space-y-8">
					<div>
						<h1 className="text-4xl font-bold mb-2">
							Welcome to TaskFlow!
						</h1>
						<p className="text-muted-foreground">
							Your dashboard overview for efficient task
							management.
						</p>
					</div>

					<section>
						<h2 className="text-2xl font-bold mb-6">
							Current Status
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<StatCard
								title="Pending Tasks"
								value={32}
								icon={ListTodo}
								iconColor="bg-primary/10 text-primary"
							/>
							<StatCard
								title="Completed Tasks"
								value={105}
								icon={CheckCircle2}
								iconColor="bg-success/10 text-success"
							/>
							<StatCard
								title="Overdue Tasks"
								value={5}
								icon={AlertCircle}
								iconColor="bg-destructive/10 text-destructive"
							/>
							<StatCard
								title="Upcoming Deadlines"
								value="3 in 7 days"
								icon={Clock}
								iconColor="bg-warning/10 text-warning"
							/>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-bold mb-6">
							Task Overview
						</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							<Card className="p-6">
								<h3 className="text-lg font-semibold mb-4">
									Recent Tasks
								</h3>
								<div className="space-y-3">
									{recentTasks.map((task) => (
										<div
											key={task.id}
											className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
										>
											<Checkbox id={`task-${task.id}`} />
											<div className="flex-1 min-w-0">
												<label
													htmlFor={`task-${task.id}`}
													className="text-sm font-medium cursor-pointer"
												>
													{task.title}
												</label>
											</div>
											<div className="flex items-center gap-2 shrink-0">
												<span className="text-xs text-muted-foreground">
													Due: {task.dueDate}
												</span>
												<PriorityBadge
													priority={task.priority}
												/>
											</div>
										</div>
									))}
								</div>
							</Card>

							<Card className="p-6">
								<h3 className="text-lg font-semibold mb-4">
									Task Priority
								</h3>
								<div className="flex items-center justify-center h-64">
									<div className="relative">
										<svg className="w-48 h-48 transform -rotate-90">
											<circle
												cx="96"
												cy="96"
												r="80"
												stroke="hsl(var(--foreground))"
												strokeWidth="32"
												fill="none"
												strokeDasharray="314 314"
												strokeDashoffset="163"
											/>
											<circle
												cx="96"
												cy="96"
												r="80"
												stroke="hsl(var(--warning))"
												strokeWidth="32"
												fill="none"
												strokeDasharray="314 314"
												strokeDashoffset="67"
											/>
											<circle
												cx="96"
												cy="96"
												r="80"
												stroke="hsl(var(--destructive))"
												strokeWidth="32"
												fill="none"
												strokeDasharray="314 314"
												strokeDashoffset="0"
											/>
										</svg>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-4 mt-4">
									<div className="text-center">
										<div className="flex items-center justify-center gap-2 mb-1">
											<div className="h-3 w-3 rounded-full bg-destructive" />
											<span className="text-sm font-medium">
												High Priority
											</span>
										</div>
										<p className="text-2xl font-bold">
											31%
										</p>
									</div>
									<div className="text-center">
										<div className="flex items-center justify-center gap-2 mb-1">
											<div className="h-3 w-3 rounded-full bg-warning" />
											<span className="text-sm font-medium">
												Medium Priority
											</span>
										</div>
										<p className="text-2xl font-bold">
											17%
										</p>
									</div>
									<div className="text-center">
										<div className="flex items-center justify-center gap-2 mb-1">
											<div className="h-3 w-3 rounded-full bg-foreground" />
											<span className="text-sm font-medium">
												Low Priority
											</span>
										</div>
										<p className="text-2xl font-bold">
											52%
										</p>
									</div>
								</div>
							</Card>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Dashboard;
