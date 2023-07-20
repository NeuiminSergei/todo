import { TaskItem } from "../TaskItem/TaskItem"
import style from './taskList.module.scss'
import { useFilter } from "@/hooks/useFilter"

export const TaskList = () => {

  const sortedTask = useFilter()

  return (
    <ul className={style.list}>
      {sortedTask.map(task => <TaskItem title={task.title} done={task.done} id={task.id} key={task.id} />)}
    </ul>
  )

}