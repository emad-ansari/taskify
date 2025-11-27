import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type React from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { DateInput } from "./date-picker";

interface CreateTaskModalProps {
	children: React.ReactNode;
}
export const CreateTaskModal = ({ children }: CreateTaskModalProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Task</DialogTitle>
					<DialogDescription>
						Add new task to your list.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4">
					<div className="grid gap-3">
						<Label htmlFor="title">Title</Label>
						<Input
							id="title"
							name="name"
							placeholder="Learning git"
						/>
					</div>
					<div className="grid gap-3">
						<Label htmlFor="">Description</Label>
						<Textarea placeholder="this is my first technology that I am going learn" />
					</div>
				</div>
				<div className="flex flex-row gap-5">
					<div className="space-y-3">
						<Label htmlFor="priority">Priority</Label>
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select priority" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="Low">Low</SelectItem>
									<SelectItem value="Medium">
										Medium
									</SelectItem>
									<SelectItem value="High">High</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-3">
						<Label htmlFor="Status">Status</Label>
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select status" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="In Progress">
										In Progress
									</SelectItem>
									<SelectItem value="Todo">Todo</SelectItem>
									<SelectItem value="Done">Done</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div>
					<DateInput />
				</div>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
