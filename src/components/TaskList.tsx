import styles from "./TaskList.module.css"
import { Trash } from "phosphor-react"

interface TasksProps {
    idTasks: number,
    contentTasks: string,
    isComplete: boolean,
    onDeleteTask: (id: number) => void,
    onAlterCheckbox: (id: number, state: boolean) => void
}

export function TaskList ({idTasks, contentTasks, isComplete, onDeleteTask, onAlterCheckbox}:TasksProps) {

    function handleAlterCheckbox () {
        onAlterCheckbox(idTasks, isComplete);
    }

    function handleDeleteTask() {
        onDeleteTask(idTasks);
    }

    return (
        <section className={styles.taskList}>
                <div className={styles.contentTasks} key={idTasks}>
                    <label>
                        <input 
                            type="checkbox" 
                            id="checkbox"
                            onClick={handleAlterCheckbox}
                        ></input>     
                        <p className={styles.noLine}>{contentTasks}</p>
                    </label>
                    <button onClick={handleDeleteTask}>
                        <Trash size={24} />
                    </button>
                </div>
        </section>
    )
}