import { TaskFilter } from '../TaskFilter/TaskFilter'
import { TaskList } from '../TaskList/TaskList'
import style from './layout.module.scss'
import { Header } from '../Header/Header'

export const Layout = () => {

  return (

    <div className={style.container}>
      <Header />
      <TaskFilter />
      <TaskList />
    </div>
  )

}