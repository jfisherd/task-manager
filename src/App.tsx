import './App.css'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
import { TaskList } from './components/TaskList/TaskList'

function App() {

  return (
    <>
      <TaskFilter />
      {/* <TaskList tasks={ myTasks } onStatusChange={onStatusChange} onDelete={onDelete}> */}
      <TaskList
      tasks={[
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
          ]}>
        {/* <TaskItem /> */}
        {/* <TaskItem /> */}
        {/* <TaskItem /> */}
      </TaskList>
    </>
  )
}

export default App
