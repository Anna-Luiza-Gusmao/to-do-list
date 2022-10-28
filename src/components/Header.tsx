import styles from "./Header.module.css"
import rocketLogo from "../assets/rocket-logo.svg"
import todoLogo from "../assets/todo-logo.svg"

export function Header (){
    return (
        <header className={styles.header}>
            <div className={styles.contentImg}>
                <img src={rocketLogo} alt="Logotipo do Rocket" />
                <img src={todoLogo} alt="Logotipo do To-Do" />
            </div>
        </header>
    )
}