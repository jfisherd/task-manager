import type { Task, TaskListProps } from '../../types'
import { TaskItem } from '../TaskItem/TaskItem'

export const TaskList = (props: TaskListProps) => {

    const listTasks = props.tasks.map((task: Task ) => {

        <TaskItem
            task={task}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            // id={task.id}
            // title={task.title}
            // description={task.description}
            // status={task.status}
            // priority={task.priority}
            // dueDate={task.dueDate}
        >
        </TaskItem>
    })

    return (
        <>
            <ul>{listTasks}</ul>
        </>
    )
}