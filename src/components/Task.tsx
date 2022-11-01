import styles from "./Task.module.css"
import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState, useEffect, InvalidEvent } from "react"
import { HeaderTaskList } from "./HeaderTaskList"
import { Trash } from "phosphor-react"
import { TaskListEmpty } from "./TaskListEmpty"

interface Tasks {
    id: number,
    content: string
}

export function Task () {
    const [tasks, setTasks] = useState<Tasks[]>([])

    const [newTask, setNewTask] = useState("")

    const isNewTaskEmpty = newTask.length === 0;
    const numberOfTasks = tasks.length;

    async function loadTasks() {
        const response = await fetch('http://localhost:3000/task');
        const data = await response.json();

        setTasks(data);
    }

    useEffect (() => {
        loadTasks();
    }, [newTask])

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
        setNewTask("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("")
        setNewTask(event.target.value)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity("Esse campo é obrigatório") 
    }

    function onDeleteTask(){
        console.log("Apagou")
    }

    return (
        <main>
            <form onSubmit={handleCreateNewTask} className={styles.task}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa" 
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewTaskEmpty}>
                        Criar
                        <span></span>
                        <PlusCircle size={20}/>
                    </button>
                </footer>
            </form>

            <HeaderTaskList 
                quantTasks={numberOfTasks}
            />

            {
                numberOfTasks == 0 ? <TaskListEmpty />
                    : <section className={styles.taskList}>
                        {tasks.map((task) => (
                            <div className={styles.contentTasks} key={task.id}>
                                <label>
                                    <input id="checkboxTask" type="checkbox" name="check"></input>     
                                    {task.content}
                                </label>
                                <button onClick={onDeleteTask}>
                                    <Trash size={24} />
                                </button>
                            </div>
                        ))}
                    </section>
            }
        </main>
    )
}