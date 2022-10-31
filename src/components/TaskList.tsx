import styles from "./TaskList.module.css"
import { Trash } from "phosphor-react"
import { useState } from "react"

interface ContentTask {
    content: string
}

export function TaskList ({content}:ContentTask) {
    return (
        <section className={styles.taskList}>
            <div className={styles.contentTasks}>
                <label>
                    <input id="checkboxTask" type="checkbox" name="check"></input>
                    {content}
                </label>
                <button>
                    <Trash size={24} />
                </button>
            </div>
        </section>
    )
}