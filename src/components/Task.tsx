import styles from "./Task.module.css"
import { PlusCircle } from "phosphor-react"
import { FormEvent, useState } from "react"

export function Task () {
    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.task}>
            <input 
                type="text"
                placeholder="Adicione uma nova tarefa" 
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