export const TaskFilter = () => {

    return (
        <>
            <h1>TaskFilter</h1>
            <label htmlFor='status-filter'>Status</label>
            <select id='status-filter'>
                <option>any</option>
                <option>pending</option>
                <option>in-progress</option>
                <option>completed</option>
            </select>
            <label htmlFor='priority-filter'>Priority</label>
            <select id='priority-filter'>
                <option>any</option>
                <option>low</option>
                <option>medium</option>
                <option>high</option>
            </select>
        </>
    )
}

