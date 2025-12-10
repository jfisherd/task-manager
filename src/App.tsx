import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
import { TaskStatus } from './types'

function App() {
  // const [count, setCount] = useState(0)

  const myTasks = [
    {
      id: 'anId',
      title: 'myTitle',
      description: 'description string',
      status: 'pending',
      priority: 'low',
      dueDate: 'Due Thursday',
    }
  ]


  function onStatusChange(taskId: string, newStatus: TaskStatus) {
    
  }

  function onDelete(taskId: string) {
    return
  }

  return (
    <>
      <TaskFilter />
      {/* <TaskItem /> */}
      <TaskList
        tasks={ }
        onStatusChange={ }
        onDelete={ }
      />
    </>
  )
}

export default App
