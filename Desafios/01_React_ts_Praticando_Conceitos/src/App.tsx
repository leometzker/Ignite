import "./global.css"

import {Clipboard, PlusCircle, Rocket} from "phosphor-react";

import styles from "./App.module.css";
import { v4 as uuidv4 } from 'uuid';

import { Task } from "./components/Task";
import { ChangeEvent, FormEvent, useState } from "react";


interface myTaskProps {
  id: string;
  concluded: boolean;
  content: string;
}

// const myTasks: myTaskProps[] = [
//   {
//     id: uuidv4(),
//     concluded: true,
//     content: "Descrição da primeira tarefa concluida"
//   },

//   {
//     id: uuidv4(),
//     concluded: false,
//     content: "Esta é outra tarefa"
//   },

//   {
//     id: uuidv4(),
//     concluded: false,
//     content: "mais uma pra fazer e nao sei como"
//   }
// ]

export function App() {

  const [myTaskList, setMyTaskList] = useState<myTaskProps[]>([])

  const [newTaskContent, setNewTaskCotent] = useState("")


  // INFO
  const numTasksCreated: number = myTaskList.length | 0;

  const numTasksConcluded: number = myTaskList.filter(t => t.concluded === true).length;

  // **************



  // NEW TASK CONTENT 
  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskCotent (event.target.value)
  }
  
  // CREATE NEW TASK 
  function createNewTask (event: FormEvent) {
    event.preventDefault();
    
    const addNewTask: myTaskProps = {      
      id: uuidv4(),
      concluded: false,
      content: newTaskContent 
    }

    setMyTaskList([...myTaskList, addNewTask])

    setNewTaskCotent("")
  }

  // CHANGE TASK STATE(CHECKED || UNCHECKED) 
  function SetStatus (id: string) {
    
    const taskUpdated = myTaskList.filter(t => { 
      if (t.id === id) {(t.concluded = !t.concluded)}
      return t;
    })
    
    setMyTaskList(taskUpdated)
  }
  
  // DELETE TASK 
  function DeleteTask (id: string) {
    setMyTaskList([])
    
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

           {/* create new task */}
          <div className={styles.newTask}>
            <form action="">
              <input 
                className={styles.setNewTask}
                type="text"
                placeholder="Adicione uma nova tarefa" 
                onChange={handleNewTask}
                value={newTaskContent}
                required
              />
              <button 
                onClick={createNewTask} 
                type="submit"
                disabled={newTaskContent.length == 0}
              > 
                Criar 
                <PlusCircle size={20}/>                
              </button>
            </form>
          </div>
          <div className={styles.tasks}>
            <div className={styles.info}>
              <div className={styles.createtasks}>
                <strong>Tarefas criadas</strong> 
                <span> {numTasksCreated} </span>
              </div>
              <div className={styles.concludeTasks}>
                <strong>Concluídas</strong>
                <span>{numTasksConcluded} de {numTasksCreated} </span>
              </div>
            </div>
            <div className={styles.taskList}>

              {/* nfo empty taskList */}

              <div className={styles.noTaskInfo}  >
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
                    onDeleteTask={DeleteTask}
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
