
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
import { TaskList } from './components/TaskList/TaskList'

function App() {



  return (
    <>
      <TaskFilter />
      {/* <TaskList tasks={ myTasks } onStatusChange={onStatusChange} onDelete={onDelete}> */}
      <TaskList>
        {/* <TaskItem /> */}
        {/* <TaskItem /> */}
        {/* <TaskItem /> */}
      </TaskList>
    </>
  )
}

export default App
