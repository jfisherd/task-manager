import type { TaskListProps } from '../../types'
import { TaskFilter } from '../TaskFilter/TaskFilter'

export const TaskList = (props: TaskListProps) => {

    const listFilteredTasks = props.tasks.map((task) => <li>{filteredTasks(task)}</li>)

    return (
        <>
            <ul>{listFilteredTasks}</ul>
        </>
    )
}