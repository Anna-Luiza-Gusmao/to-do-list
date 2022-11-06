import styles from "./HeaderTaskList.module.css"

interface NumberOfTasks {
    quantTasks: number,
    quantCompleteTasks: number
}

export function HeaderTaskList ({quantTasks, quantCompleteTasks}:NumberOfTasks) {
    return (
        <div className={styles.headerTaskList}>
            <header>
                <div className={styles.contentParagraphCriadas}>
                    <p>Tarefas criadas</p>
                    <span>{quantTasks}</span>
                </div>
                <div className={styles.contentParagraphConcluidas}>
                    <p>Concluídas</p>
                    <span>{quantCompleteTasks} de {quantTasks}</span>
                </div>
            </header>
        </div>
    )
}