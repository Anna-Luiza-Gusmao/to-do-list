import styles from "./TaskListEmpty.module.css"
import { Notepad } from "phosphor-react"

export function TaskListEmpty (){
    return (
        <div>
            <hr className={styles.line}></hr>
            <div className={styles.taskListEmpty}>
                <Notepad size={96} />

                <footer>
                    <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </footer>
            </div>
        </div>
    )
}