import { useState } from "react";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { StatusBadge } from "@/components/common/status-badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Trash2, Plus } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { DateInput } from "@/components/common/date-picker";

const TaskDetail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [priority, setPriority] = useState("High");
	const [status, setStatus] = useState("In Progress");

	return (
		<div className="min-h-screen flex flex-col">
			<Header />

			<main className="flex-1 container mx-auto px-6 py-8">
				<div className="max-w-4xl mx-auto space-y-6">
					<Card className="p-8">
						<div className="space-y-6">
							<div className="flex items-start justify-between">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold">
										Implement User Authentication Module
									</h1>
									<div className="flex items-center gap-3">
										<StatusBadge status={status as any} />
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="description">
										Description
									</Label>
									<Textarea
										id="description"
										className="min-h-[120px] resize-none"
										defaultValue="Develop and integrate the user authentication module covering sign-up, login, password reset, and session management. Ensure robust security practices and proper error handling. This includes both frontend UI components and backend API endpoints."
									/>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[50%] ">
									<div className="flex flex-row ">
										<div className="space-y-2 w-full">
											<Label htmlFor="priority">
												Priority
											</Label>
											<Select
												value={priority}
												onValueChange={setPriority}

											>
												<SelectTrigger id="priority"  className="w-[180px]">
													<SelectValue placeholder="Select priority" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="High">
														High
													</SelectItem>
													<SelectItem value="Medium">
														Medium
													</SelectItem>
													<SelectItem value="Low">
														Low
													</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="status">Status</Label>
										<Select
											value={status}
											onValueChange={setStatus}
										>
											<SelectTrigger id="status" className="w-[180px]">
												<SelectValue placeholder="Select status"  />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="To Do">
													To Do
												</SelectItem>
												<SelectItem value="In Progress">
													In Progress
												</SelectItem>
												<SelectItem value="Done">
													Done
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="space-y-2 w-[400px]">
										<DateInput />
									</div>
								</div>

								<div className="space-y-2">
									<Label>Assignees</Label>
									<div className="flex items-center gap-2">
										<Avatar className="h-10 w-10 bg-primary/10">
											<AvatarFallback className="text-primary">
												JD
											</AvatarFallback>
										</Avatar>
										<Avatar className="h-10 w-10 bg-info/10">
											<AvatarFallback className="text-info">
												SM
											</AvatarFallback>
										</Avatar>
										<Button
											variant="outline"
											size="icon"
											className="h-10 w-10"
										>
											<Plus className="h-4 w-4" />
										</Button>
									</div>
								</div>
							</div>

							<div className="flex items-center justify-between pt-4 border-t">
								<Button
									variant="outline"
									className="gap-2"
									onClick={() => navigate("/tasks")}
								>
									<ArrowLeft className="h-4 w-4" />
									Back to Tasks
								</Button>
								<div className="flex gap-3">
									<Button
										variant="destructive"
										className="gap-2"
									>
										<Trash2 className="h-4 w-4" />
										Delete Task
									</Button>
									<Button>Save Changes</Button>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default TaskDetail;
