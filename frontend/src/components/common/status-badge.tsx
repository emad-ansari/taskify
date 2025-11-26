import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
	status: "To Do" | "In Progress" | "Done";
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
	const variants = {
		"To Do": "bg-info/10 text-info hover:bg-info/20",
		"In Progress": "bg-warning/10 text-warning hover:bg-warning/20",
		Done: "bg-success/10 text-success hover:bg-success/20",
	};

	return (
		<Badge variant="secondary" className={variants[status]}>
			{status}
		</Badge>
	);
};
