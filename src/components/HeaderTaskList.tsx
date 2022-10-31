import styles from "./HeaderTaskList.module.css"

export function HeaderTaskList () {
    return (
        <div className={styles.headerTaskList}>
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
        </div>
    )
}