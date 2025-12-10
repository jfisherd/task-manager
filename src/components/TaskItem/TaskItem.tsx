import type { TaskItemProps } from "../../types"


export const TaskItem = (props: TaskItemProps) => {

    return (
        <>
            <li>
                <div>id: {props.task.id}</div>
                <div>title: {props.task.title}</div>
                <div>description: {props.task.description}</div>
                <div>status: {props.task.status}</div>
                <div>priority: {props.task.priority}</div>
                <div>due date: {props.task.dueDate}</div>
                <button>Delete</button>
            </li>
        </>
    )
}