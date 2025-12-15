/////////
export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'any';
export type TaskPriority = 'low' | 'medium' | 'high' | 'any'
 
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}
 
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

/////////
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  toBeDeleted: boolean // Likely the wrong direction
}

/////////
export interface TaskFilterProps {
  onFilterChange: (filters: Filters) => void;
}

export interface Filters {
  status?: TaskStatus
  priority?: TaskPriority
}
