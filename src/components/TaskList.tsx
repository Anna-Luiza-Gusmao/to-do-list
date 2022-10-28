import styles from "./TaskList.module.css"

export function TaskList () {
    return (
        <section className={styles.taskList}>
            <header>
                <div className={styles.contentParagraphCriadas}>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </div>
                <div className={styles.contentParagraphConcluidas}>
                    <p>Concluídas</p>
                    <span>0</span>
                </div>
            </header>
            <hr className={styles.line}></hr>
            <body>

            </body>
        </section>
    )
}