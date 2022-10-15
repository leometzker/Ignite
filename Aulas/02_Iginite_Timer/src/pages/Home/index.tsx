import { Play } from "phosphor-react";
import { CountContainer, CountdownButton, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          < label htmlFor="task">Vou trabalhar em 
          </label>
          <TaskInput 
            type="text" 
            id="task" 
            placeholder="de um nome para seu projeto"
            list="task-list"
          />

          <datalist id='task-list' >
            <option value="Projeto 01" />
            <option value="Projeto 02" />
            <option value="Projeto 03" />
            <option value="outro qualquer" />

          </datalist>
          

          <label htmlFor="minutsAmount">durante</label>
          <MinutesAmountInput 
            type="number" 
            id="minutsAmount" 
            placeholder="00" 
            step= {5}
            max= {60}
            min= {5}
          />

          <span>minutos.</span>
        </FormContainer>
        
        <CountContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountContainer>

        <CountdownButton type="submit">
          <Play size= {24}/>
          Começar
        </CountdownButton>
      </form>
    </HomeContainer>
  )
}
