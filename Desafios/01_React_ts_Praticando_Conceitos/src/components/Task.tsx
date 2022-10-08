import { Trash } from "phosphor-react"
import { ButtonHTMLAttributes, ChangeEvent, useState } from "react";
import styles from "./Task.module.css"

export interface taskProps {
  id: string;
  concluded: boolean;
  content: string;
  onSetStatus: (id: string) => void; 
  onDeleteTask: (id: string) => void;
}

export function Task ({id, concluded, content, onSetStatus, onDeleteTask}: taskProps) {

  // user set status  
  function handleSetStatus (event: ChangeEvent<HTMLInputElement>){
    onSetStatus(id);
  }

  function handleDeleteTask () {
    // console.log(`apagar comentario ${id} `)
    onDeleteTask(id);
  }

  return (    
    <div className={styles.task}>
      <input  className={styles.completedTaskSet}
        type="checkbox" 
        name="completedTaskSet" 
        checked={concluded}
        onChange={handleSetStatus}
      />

      <div className={styles.taskContent}>
        <p>
          {content}
        </p>
      </div>
      <button onClick={handleDeleteTask} className={styles.deleteTask}>
        <Trash size={24}/>
      </button>

    </div>    
  )
}