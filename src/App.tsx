import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
import { TaskList } from './components/TaskList/TaskList'

function App() {

  const [myTasks, setMyTasks] = useState([
    {
      id: '1',
      title: 'myTitle',
      description: 'description string',
      status: 'completed',
      priority: 'low',
      dueDate: Date.now().toString,
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

  function onStatusChange(taskId: string, newStatus: TaskStatus) {
    // update the status
    return
  }

  function onDelete(taskId: string) {
    // delete the task
    return
  }

  return (
    <>
      <TaskFilter />
      <TaskList tasks={ myTasks } onStatusChange={onStatusChange} onDelete={onDelete}>
        {/* <TaskItem /> */}
        {/* <TaskItem /> */}
        {/* <TaskItem /> */}
      </TaskList>
    </>
  )
}

export default App
