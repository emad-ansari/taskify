import { useState } from "react";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { PriorityBadge } from "@/components/common/priority-badge";
import { StatusBadge } from "@/components/common/status-badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const tasks = [
  {
    id: "tsk-001",
    name: "Develop marketing campaign for Q3 product launch",
    dueDate: "Jul 15, 2024",
    priority: "High" as const,
    status: "In Progress" as const,
  },
  {
    id: "tsk-002",
    name: "Review and approve Q2 financial reports",
    dueDate: "Jun 30, 2024",
    priority: "High" as const,
    status: "To Do" as const,
  },
  {
    id: "tsk-003",
    name: "Schedule team building event for July",
    dueDate: "Jun 25, 2024",
    priority: "Medium" as const,
    status: "Done" as const,
  },
  {
    id: "tsk-004",
    name: "Research new CRM software solutions",
    dueDate: "Jul 1, 2024",
    priority: "Medium" as const,
    status: "In Progress" as const,
  },
  {
    id: "tsk-005",
    name: "Prepare presentation for stakeholder meeting",
    dueDate: "Jul 10, 2024",
    priority: "High" as const,
    status: "To Do" as const,
  },
  {
    id: "tsk-006",
    name: "Update employee handbook with new policies",
    dueDate: "Aug 1, 2024",
    priority: "Low" as const,
    status: "To Do" as const,
  },
  {
    id: "tsk-007",
    name: "Organize client feedback session",
    dueDate: "Jul 20, 2024",
    priority: "Medium" as const,
    status: "In Progress" as const,
  },
];

const Tasks = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Task List</h1>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add New Task
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Status:</span>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="To Do">To Do</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Priority:</span>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort By:</span>
              <Select defaultValue="due-date">
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="due-date">Due Date</SelectItem>
                  <SelectItem value="priority">Priority</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th className="text-left p-4 w-12">
                      <Checkbox />
                    </th>
                    <th className="text-left p-4 font-medium">Task Name</th>
                    <th className="text-left p-4 font-medium w-32">Due Date</th>
                    <th className="text-left p-4 font-medium w-32">Priority</th>
                    <th className="text-left p-4 font-medium w-32">Status</th>
                    <th className="text-left p-4 font-medium w-20">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr
                      key={task.id}
                      className={`border-b last:border-0 hover:bg-muted/30 transition-colors ${
                        index % 2 === 0 ? "bg-card" : "bg-muted/10"
                      }`}
                    >
                      <td className="p-4">
                        <Checkbox />
                      </td>
                      <td className="p-4">
                        <span className="font-medium">{task.name}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-muted-foreground">
                          {task.dueDate}
                        </span>
                      </td>
                      <td className="p-4">
                        <PriorityBadge priority={task.priority} />
                      </td>
                      <td className="p-4">
                        <StatusBadge status={task.status} />
                      </td>
                      <td className="p-4">
                        <Link to={`/tasks/${task.id}`}>
                          <Button variant="ghost" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing 1-7 of 15 tasks
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tasks;