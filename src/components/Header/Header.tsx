import { CreateTaskMenu } from "../CreateTaskMenu/CreateTaskMenu"
import style from './header.module.scss'
import { ThemeBtn } from "../ThemeBtn/ThemeBtn"

export const Header = () => {

  return (
    <div className={style.wrapper}>
      <CreateTaskMenu />
      <ThemeBtn />
    </div>
  )
}