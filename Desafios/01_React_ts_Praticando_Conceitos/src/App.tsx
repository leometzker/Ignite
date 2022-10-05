// definições e variáveis globais
import "./global.css"

import {Clipboard, PlusCircle, Rocket, Trash, TrashSimple} from "phosphor-react";

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
              
              
              <div className={styles.task}>
                <input  className={styles.completedTaskSet}
                  type="checkbox" 
                  name="completedTaskSet" 
                  id="" 
                  // checked={false}
                />
          
                <div className={styles.taskContent}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto excepturi ex iste inventore modi, reiciendis molestias eveniet at earum! Autem, placeat minus quo ipsa deserunt et aperiam illum ut! Integer
                  </p>
                </div>
                <button className={styles.deleteTask}>
                  <Trash size={24}/>
                </button>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>    
  )
}
