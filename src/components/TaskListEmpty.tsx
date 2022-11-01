import styles from "./TaskListEmpty.module.css"
import { Notepad } from "phosphor-react"

export function TaskListEmpty (){
    return (
        <div className={styles.taskListEmpty}>
            <hr className={styles.line}></hr>
            <Notepad size={96} />

            <footer>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </footer>
        </div>
    )
}