import style from './mainInput.module.scss'

interface IMainInputProps {
  value: string
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const MainInput = ({ value, onchange }: IMainInputProps) => {

  return (
    <input className={style.input} type="text" value={value} onChange={onchange} />
  )
}