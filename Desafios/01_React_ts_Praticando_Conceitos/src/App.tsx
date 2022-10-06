import "./global.css"

import {Clipboard, PlusCircle, Rocket} from "phosphor-react";

import styles from "./App.module.css";
import { Task, taskProps } from "./components/Task";
import { useState } from "react";

interface myTaskProps{
  id: number;
  concluded: boolean;
  content: string;
}

const myTasks: myTaskProps[] = [
  {
    id: 1,
    concluded: true,
    content: "Descrição da primeira tarefa concluida"
  },

  {
    id: 2,
    concluded: false,
    content: "Esta é outra tarefa"
  },

  {
    id: 3,
    concluded: false,
    content: "mais uma pra fazer e nao sei como"
  }
]

export function App() {


const [myTaskList, setMyTaskList] = useState<myTaskProps[]>([])

function SetStatus (id: number) {
  
  // console.log(myTasks)
  
  const taskUpdated = myTaskList.filter(t => { 
    if (t.id === id) {(t.concluded = !t.concluded)}
    return t;
  })
  
  // console.log(taskUpdated)
  setMyTaskList(taskUpdated)
}

function novatarefa (){
  setMyTaskList(myTasks)
  
}


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
                onChange={novatarefa}

              />
              <button> Criar <PlusCircle size={20}/>
                
              </button>
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
              
              {/* iteração das tarefas */}
                {myTaskList.map(t => {
                return (
                  <Task 
                    key= {t.id}
                    id= {t.id}
                    concluded= {t.concluded}
                    content= {t.content}
                    onSetStatus={SetStatus}
                    // onDeleteTask={}
                  />
                )
              })}
              
            </div>
          </div>
        </main>
      </div>
    </div>    
  )
}
