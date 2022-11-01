import styles from "./TaskList.module.css"
import { Trash } from "phosphor-react"

export function TaskList () {
    async function getPost() {
        const options = {method: 'GET'};

        fetch('http://localhost:3000/task', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <section className={styles.taskList}>
           <div className={styles.contentTasks}>
                <label>
                    <input id="checkboxTask" type="checkbox" name="check"></input>            
                </label>
                <button>
                    <Trash size={24} />
                </button>
            </div>
        </section>
    )
}

/*
{tasks.map(task => {
                return (
                    <div className={styles.contentTasks}>
                        <label>
                            <input id="checkboxTask" type="checkbox" name="check"></input>
                            
                        </label>
                        <button>
                            <Trash size={24} />
                        </button>
                    </div>
                )
            })}*/