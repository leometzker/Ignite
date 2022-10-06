import "./global.css"

import {Clipboard, PlusCircle, Rocket} from "phosphor-react";

import styles from "./App.module.css";
import { Task } from "./components/Task";


export function App() {
  return (    
    <div>
      <div className={styles.backgroudTop}></div>
          
      <div className={styles.layout}>
        <header>
          <Rocket size={36}/>
          <strong>to<span>do</span></strong>
        </header>

        <main>
          <div className={styles.newTask}>
            <form action="">
              <input 
                className={styles.setNewTask}
                type="text"
                placeholder="Adicione uma nova tarefa" 

              />
              <button>Criar <PlusCircle size={20}></PlusCircle> </button>
            </form>
          </div>
          <div className={styles.tasks}>
            <div className={styles.info}>
              <div className={styles.createtasks}>
                <strong>Tarefas criadas</strong> 
                <span>5</span>
              </div>
              <div className={styles.concludeTasks}>
                <strong>Concluídas</strong>
                <span>2 de 3</span>
              </div>
            </div>
            <div className={styles.taskList}>

              {/* nfo empty taskList */}

              <div className={styles.noTaskInfo}>
                <Clipboard size={56} weight={"thin"} />
                <strong>Você ainda não tem tarefas cadastras</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
              
                <Task />
              
            </div>
          </div>
        </main>
      </div>
    </div>    
  )
}
