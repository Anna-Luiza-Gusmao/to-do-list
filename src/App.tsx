import styles from './App.module.css'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskList } from './components/TaskList'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Task />
        <TaskList />
      </div>
    </div>
  )
}
