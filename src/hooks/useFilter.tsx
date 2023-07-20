import { useMemo } from "react"
import { useAppSelector } from "./redux"

export const useFilter = () => {
  const { tasks } = useAppSelector(state => state.taskReducer)
  const { sort } = useAppSelector(state => state.taskReducer)

  const sortedTask = useMemo(() => {
    if (sort === 'completed') {
      return tasks.filter(task => task.done === true)
    } else if (sort === 'unfulfilled') {
      return tasks.filter(task => task.done === false)
    } else return tasks
  }, [sort, tasks])
  return sortedTask
} 