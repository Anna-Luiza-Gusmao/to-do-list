import "./TaskList.css"
import { Trash } from "phosphor-react"
import { useState } from "react"

interface TasksProps {
    idTasks: number,
    contentTasks: string,
    onDeleteTask: (id: number) => void,
    numberOfCompleteTasks: number
}

export function TaskList ({idTasks, contentTasks, onDeleteTask, numberOfCompleteTasks}:TasksProps) {

    const [stateOfCheckbox, setStateOfCheckbox] = useState(Boolean)
    const [stateDecorationOfCheckbox, setStateDecorationOfCheckbox] = useState('noLine')

    if(stateOfCheckbox == true) numberOfCompleteTasks++;

    console.log(numberOfCompleteTasks)

    function handleCheckbox () {
        setStateOfCheckbox(!stateOfCheckbox);

        stateOfCheckbox === false ?
            setStateDecorationOfCheckbox('line')
        : setStateDecorationOfCheckbox('noLine')
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