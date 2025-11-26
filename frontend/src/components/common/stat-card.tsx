import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
	title: string;
	value: string | number;
	icon: LucideIcon;
	iconColor: string;
}

export const StatCard = ({
	title,
	value,
	icon: Icon,
	iconColor,
}: StatCardProps) => {
	return (
		<Card className="p-6 hover:shadow-md transition-shadow">
			<div className="flex items-start justify-between">
				<div className="space-y-2">
					<p className="text-sm text-muted-foreground">{title}</p>
					<p className="text-3xl font-mono font-bold">{value}</p>
				</div>
				<div className={`p-3 rounded-lg ${iconColor}`}>
					<Icon className="h-5 w-5" />
				</div>
			</div>
		</Card>
	);
};
