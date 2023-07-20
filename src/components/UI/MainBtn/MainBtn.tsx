import style from './mainBtn.module.scss'

interface IMainBtnProps {
  children: React.ReactNode
  onclick: () => void
  type?: string
}

export const MainBtn = ({ children, onclick, type }: IMainBtnProps) => {

  const rootClasses = [style.btn]

  if (type === 'remove') {
    rootClasses.push(style.remove)
  }

  return (
    <button className={rootClasses.join(' ')} onClick={onclick}>{children}</button>
  )
}