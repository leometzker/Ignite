import "./global.css"

import {Clipboard, PlusCircle, Rocket} from "phosphor-react";

import styles from "./App.module.css";
import { v4 as uuidv4 } from 'uuid';

import { Task, taskProps } from "./components/Task";
import { ChangeEvent, FormEvent, useState } from "react";


interface myTaskProps {
  id: number;
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

  const [newTask, setNewTask] = useState<myTaskProps>()


  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    const addTask: myTaskProps = {      
      id: uuidv4(),
      concluded: false,
      content: event.target.value
    }

    setNewTask (addTask)
  }


  function createNewTask (event: FormEvent) {
    event.preventDefault();
    
    setMyTaskList([...myTaskList, newTask])

    // COMO MELHORAR?
    const addTask: myTaskProps = {      
      id: uuidv4(),
      concluded: false,
      content: ""
    }

    setNewTask(addTask)
  }


  function SetStatus (id: number) {
    
    const taskUpdated = myTaskList.filter(t => { 
      if (t.id === id) {(t.concluded = !t.concluded)}
      return t;
    })
    
    // console.log(taskUpdated)
    setMyTaskList(taskUpdated)
  }

  function DeleteTask (id: number) {
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
                value={newTask?.content}
              />
              <button 
                onClick={createNewTask} 
                type="submit"
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
