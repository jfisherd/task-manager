import { useState } from "react"
import type { Task, Filters, TaskFilterProps } from "../../types"

export const TaskFilter = (props: TaskFilterProps) => {

    const onFilterChange = () => {

    }

    const [myTasks, setMyTasks] = useState<Task[] | null>(null)

    const [selectedFilters, setSelectedFilters] = useState<Filters | null>({
        status: 'any',
        priority: 'any'
    })

    const filteredTasks = myTasks.filter(task => {
        if (selectedFilters.status === 'any' && selectedFilters.priority === 'any') {
            return true
        } else if (selectedFilters.status === 'any') {
            return task.priority === selectedFilters.priority
        } else if (selectedFilters.priority === 'any') {
            return task.status === selectedFilters.status
        } else {
            return task.status === selectedFilters.status && task.priority === selectedFilters.priority
        }
    })

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStatus(event.target.value)
    }

    const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPriority(event.target.value)
    }

    return (
        <>
            <h1>TaskFilter</h1>
            <label htmlFor='status-filter'>Status</label>
            <select
                id='status-filter'
                value={selectedStatus}
                onChange={handleStatusChange}>
                <option>any</option>
                <option>pending</option>
                <option>in-progress</option>
                <option>completed</option>
            </select>
            <label htmlFor='priority-filter'>Priority</label>
            <select
                id='priority-filter'
                value={selectedPriority}
                onChange={handlePriorityChange}>
                <option>any</option>
                <option>low</option>
                <option>medium</option>
                <option>high</option>
            </select>
        </>
    )
}

