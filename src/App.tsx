import styles from './App.module.css'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskList } from './components/TaskList'
import { HeaderTaskList } from './components/HeaderTaskList'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Task />
        <HeaderTaskList />
        <main>
          <TaskList />
        </main>
      </div>
    </div>
  )
}
