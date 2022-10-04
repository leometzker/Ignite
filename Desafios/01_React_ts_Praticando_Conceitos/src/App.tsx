// definições e variáveis globais
import "./global.css"

import {PlusCircle, Rocket} from "phosphor-react";

import styles from "./App.module.css";


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
                placeholder="adicione uma nova tarefa" 

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
              <div className={styles.task}>
                <button radioGroup="1" >s</button>
                <div className={styles.taskContent}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto excepturi ex iste inventore modi, reiciendis molestias eveniet at earum! Autem, placeat minus quo ipsa deserunt et aperiam illum ut!
                </div>
                <button>deletar</button>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>    
  )
}
