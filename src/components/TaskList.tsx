import "./TaskList.css"
import { Trash } from "phosphor-react"
import { useState } from "react"

interface TasksProps {
    idTasks: number,
    contentTasks: string,
    onDeleteTask: (id: number) => void
}

export function TaskList ({idTasks, contentTasks, onDeleteTask}:TasksProps) {
    let quantCompleteTasks = 0;

    const [stateOfCheckbox, setStateOfCheckbox] = useState(Boolean)
    const [stateDecorationOfCheckbox, setStateDecorationOfCheckbox] = useState('noLine')
    const [valueCompleteTasks, setValueCompleteTasks] = useState(Number)

    function handleCheckbox () {
        setStateOfCheckbox(!stateOfCheckbox);

        stateOfCheckbox === false ? (
            setStateDecorationOfCheckbox('line'),
            quantCompleteTasks++,
            setValueCompleteTasks(quantCompleteTasks)
        ) : setStateDecorationOfCheckbox('noLine')

        console.log(valueCompleteTasks)
    }

    function handleDeleteTask() {
        onDeleteTask(idTasks);
    }

    return (
        <section className="taskList">
                <div className="contentTasks" key={idTasks}>
                    <label>
                        <input 
                            type="checkbox" 
                            id="checkbox"
                            value={idTasks}
                            checked={stateOfCheckbox}
                            onChange={handleCheckbox}
                        ></input>     
                        <p className={stateDecorationOfCheckbox}>{contentTasks}</p>
                    </label>
                    <button onClick={handleDeleteTask}>
                        <Trash size={24} />
                    </button>
                </div>
        </section>
    )
}