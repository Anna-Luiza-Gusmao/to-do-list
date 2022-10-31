import styles from "./Task.module.css"
import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react"

export function Task () {
    const [task, setTask] = useState([""])

    const [newTask, setNewTask] = useState("")

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();

        setTask([...task, newTask]);
        setNewTask("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("")
        setNewTask(event.target.value)
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.task}>
            <input 
                type="text"
                placeholder="Adicione uma nova tarefa" 
                value={newTask}
                onChange={handleNewTaskChange}
            />

            <footer>
                <button type="submit">
                    Criar
                    <span></span>
                    <PlusCircle size={20}/>
                </button>
            </footer>
        </form>
    )
}