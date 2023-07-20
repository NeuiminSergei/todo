import { useState } from "react"
import { MainBtn } from "../UI/MainBtn/MainBtn"
import { MainInput } from "../UI/MainInput/MainInput"
import style from './CreateTaskMenu.module.scss'
import { taskSlice } from "@/store/reducers/TaskSlice"
import { useAppDispatch } from "@/hooks/redux"
import { ITask } from "@/types/types"

export const CreateTaskMenu = () => {

  const { addTask } = taskSlice.actions
  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  function createNewTask() {

    const task: ITask = {
      title: inputValue,
      done: false,
      id: Date.now()
    }

    setInputValue('')
    return task
  }

  return (
    <div className={style.wrapper}>
      <MainInput value={inputValue} onchange={handleChange} />
      <MainBtn onclick={() => dispatch(addTask(createNewTask()))}>Добавить</MainBtn>
    </div>
  )
}