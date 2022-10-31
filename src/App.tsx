import styles from './App.module.css'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskList } from './components/TaskList'
import { HeaderTaskList } from './components/HeaderTaskList'

const task = [
  {
    id: 1,
    content: "Comprar a feira do mês"
  },
  {
    id: 2,
    content: "Ir na academia"
  },
  {
    id: 3,
    content: "Estudar para a prova"
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Task />
        <HeaderTaskList />
        <main>
          {task.map(task => {
            return (
              <TaskList 
                key={task.id}
                content={task.content}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
