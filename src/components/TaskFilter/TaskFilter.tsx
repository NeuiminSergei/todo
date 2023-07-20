import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { taskSlice } from "@/store/reducers/TaskSlice"
import style from './taskFilter.module.scss'

export const TaskFilter = () => {

  const { sort } = useAppSelector(state => state.taskReducer)
  const { changeSort } = taskSlice.actions
  const dispatch = useAppDispatch()

  return (
    <select className={style.select} value={sort} onChange={(e) => dispatch(changeSort(e.target.value))}>
      <option disabled value="default">Сортировка</option>
      <option value="all">Все</option>
      <option value="completed">Выполненные</option>
      <option value="unfulfilled">Невыполненные</option>
    </select>
  )
}