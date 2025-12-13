import type { TaskItemProps } from "../../types"

export const TaskItem = (props: TaskItemProps) => {

    const deleteItem = (event: Event) => {
        // Delete the list item
        myTasks[event.target.id] = <></>
        
    }

    return (
        <>
            <li>
                <div>id: {props.task.id}</div>
                <div>title: {props.task.title}</div>
                <div>description: {props.task.description}</div>
                <div>status: {props.task.status}</div>
                <div>priority: {props.task.priority}</div>
                <div>due date: {props.task.dueDate}</div>
                <button onClick={deleteItem}>Delete</button>
            </li>
        </>
    )
}