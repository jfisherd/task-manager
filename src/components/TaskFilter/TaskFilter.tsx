import { useState } from "react"
import type { TaskFilterProps } from "../../types"

export const TaskFilter = (props: TaskFilterProps) => {

    const [myTasks, setMyTasks] = useState([
        {
            id: '1',
            title: 'myTitle',
            description: 'description string',
            status: 'completed',
            priority: 'low',
            dueDate: 'Date.now().toString',
        },
        {
            id: '2',
            title: 'Rant About Emojis',
            description: '🤮🤮🤮🤮🤮🤮🤮',
            status: 'pending',
            priority: 'medium',
            dueDate: '01/01/2070',
        },
        {
            id: '3',
            title: 'Learn to Stop Worrying and Love the DOM',
            description: 'It is not only possible, it is essential.',
            status: 'in-progress',
            priority: 'high',
            dueDate: 'Midnight',
        }
    ])

    const [selectedStatus, setSelectedStatus] = useState('any')
    const [selectedPriority, setSelectedPriority] = useState('any')

    const [selectedFilters, setSelectedFilters] = useState({
        status: 'any',
        priority: 'any'
    })

    const filteredTasks = myTasks.filter(task => {
        if (selectedStatus === 'any' && selectedPriority === 'any') {
            return true
        } else if (selectedStatus === 'any') {
            return task.priority === selectedPriority
        } else if (selectedPriority === 'any') {
            return task.status === selectedStatus
        } else {
            return task.status === selectedStatus && task.priority === selectedPriority
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

