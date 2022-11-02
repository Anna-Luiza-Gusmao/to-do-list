import styles from "./TaskList.module.css"
import { Trash } from "phosphor-react"
import { useState } from "react";

interface TasksProps {
    idTasks: number,
    contentTasks: string,
    onDeleteTask: (id: number) => void
}

export function TaskList ({idTasks, contentTasks, onDeleteTask}:TasksProps) {
    const [checkboxOfTask, setCheckboxOfTask] = useState(Boolean)

    function handleDeleteTask() {
        onDeleteTask(idTasks);
    }

    function checkCheckbox (){
        const checkbox = document.getElementById(
            'checkboxTask',
        ) as HTMLInputElement;

        const changeDecoration = document.getElementById(
            'changeDecoration',
        ) as HTMLInputElement;
        
        if (checkbox?.checked) {
            setCheckboxOfTask(true);
            changeDecoration.style.textDecoration = 'line-through';
        } else {
            setCheckboxOfTask(false);
            changeDecoration.style.textDecoration = 'none';
        }
    }

    return (
        <section className={styles.taskList}>
                <div className={styles.contentTasks} key={idTasks}>
                    <label>
                        <input id="checkboxTask" type="checkbox" name="check" onClick={checkCheckbox}></input>     
                        <p id="changeDecoration">{contentTasks}</p>
                    </label>
                    <button onClick={handleDeleteTask}>
                        <Trash size={24} />
                    </button>
                </div>
        </section>
    )
}