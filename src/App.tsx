import styles from './App.module.css'
import { Header } from './components/Header'
import { Task } from './components/Task'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Task />
      </div>
    </div>
  )
}
