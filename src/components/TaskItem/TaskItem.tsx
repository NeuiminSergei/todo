import { ITask } from "@/types/types"
import style from './taskItem.module.scss'
import { MainBtn } from "../UI/MainBtn/MainBtn"
import { taskSlice } from "@/store/reducers/TaskSlice"
import { useAppDispatch } from "@/hooks/redux"

export const TaskItem = ({ title, done, id }: ITask) => {

  const { removeTask } = taskSlice.actions
  const { completedTask } = taskSlice.actions
  const dispatch = useAppDispatch()

  const rootClasses = [style.item]

  if (done) {
    rootClasses.push(style.success)
  }

  return (
    <li className={rootClasses.join(' ')}>
      <h3 className={style.title}>{title}</h3>
      <MainBtn onclick={() => dispatch(removeTask(id))} type={'remove'}>x</MainBtn>
      <input type="checkbox" checked={done} onChange={() => dispatch(completedTask(id))} />
    </li>
  )

}