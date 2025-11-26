import { Badge } from "@/components/ui/badge";

interface PriorityBadgeProps {
	priority: "High" | "Medium" | "Low";
}

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
	const variants = {
		High: "bg-destructive/10 text-destructive hover:bg-destructive/20",
		Medium: "bg-warning/10 text-warning hover:bg-warning/20",
		Low: "bg-muted text-muted-foreground hover:bg-muted",
	};

	return (
		<Badge variant="secondary" className={variants[priority]}>
			{priority}
		</Badge>
	);
};
