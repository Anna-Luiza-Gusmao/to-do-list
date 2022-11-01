import styles from "./Task.module.css"
import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState, useEffect } from "react"

export function Task () {
    const [task, setTask] = useState([""])

    const [newTask, setNewTask] = useState("")

    async function loadTasks() {
        const response = await fetch('http://localhost:3000/task');
        const data = await response.json();

        setTask(data);
    }

    useEffect (() => {
        loadTasks();
    }, [])

    async function postTask(content: string){
        fetch('http://localhost:3000/task', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        }).then(data => data.json())
    }

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();

        postTask(newTask);
        setTask([...task, newTask]);
        setNewTask("");

        console.log(task)
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