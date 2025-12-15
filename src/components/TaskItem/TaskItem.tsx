import type { TaskItemProps } from "../../types"

export const TaskItem = (props: TaskItemProps) => {


    let toBeDeleted: boolean =  false
    const deleteItem = (event: Event) => {
        toBeDeleted = true // Make a state variable?
        // Delete the list item
        // myTasks[event.target.id] = <></> // Don't complicate this
        // Expect a memory leak if tasks can be added but are never removed from the list
        // event.target.closest('li') // Closer
        // Don't return void
    }

    return (
        <>
            <li key={props.task.id}>
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