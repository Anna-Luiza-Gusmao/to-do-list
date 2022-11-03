import styles from "./Task.module.css"
import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { HeaderTaskList } from "./HeaderTaskList"
import { TaskListEmpty } from "./TaskListEmpty"
import { TaskList } from "./TaskList"

interface Tasks {
    id: number,
    content: string,
    isComplete: boolean
}

export function Task () {
    const [tasks, setTasks] = useState<Tasks[]>([])

    const [newTask, setNewTask] = useState("")

    const [stateDeleteTask, setNewStateDeleteTask] = useState(Boolean)

    const [stateOfCheckbox, setStateOfCheckbox] = useState(false)
    //const [stateDecorationOfCheckbox, setStateDecorationOfCheckbox] = useState('line')

    function handleAlterCheckbox (id: number, state: boolean) {
        setStateOfCheckbox(!state);
        console.log(stateOfCheckbox)

        let url = `http://localhost:3000/task/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: "ana", isComplete: stateOfCheckbox })
        }).then(data => data.json())
    }

    const isNewTaskEmpty = newTask.length === 0;
    const numberOfTasks = tasks.length;
    
    let numberOfCompleteTasks = 0;
    tasks.map((task) => {
        if(task.isComplete === true){
            numberOfCompleteTasks = numberOfCompleteTasks + 1;
        }
    });

    async function loadTasks() {
        const response = await fetch('http://localhost:3000/task');
        const data = await response.json();

        setTasks(data);
        setNewStateDeleteTask(false);
        setStateOfCheckbox(!stateOfCheckbox);
    }

    useEffect (() => {
        loadTasks();
    }, [newTask, stateDeleteTask])

    async function postTask(content: string, isComplete: boolean){
        fetch('http://localhost:3000/task', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content, isComplete })
        }).then(data => data.json())
    }

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();

        postTask(newTask, stateOfCheckbox);
        setNewTask("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("")
        setNewTask(event.target.value)
    }

    async function onDeleteTask(id: number) {
        let url = `http://localhost:3000/task/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(data => data.json())
        
        setTasks(tasks);
        setNewStateDeleteTask(true);
    }

    return (
        <main>
            <form onSubmit={handleCreateNewTask} className={styles.task}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa" 
                    value={newTask}
                    onChange={handleNewTaskChange}
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
                quantCompleteTasks={numberOfCompleteTasks}
            />

            {
                numberOfTasks == 0 ? <TaskListEmpty />
                    : tasks.map((task) => (
                        <TaskList key={task.id}
                            idTasks={task.id}
                            contentTasks={task.content}
                            isComplete={task.isComplete}
                            onDeleteTask={onDeleteTask}
                            onAlterCheckbox={handleAlterCheckbox}
                        />
                    ))
            }
        </main>
    )
}