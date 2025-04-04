interface IButtonLogin{
  onClick: () => void,
  type?: "submit" | "reset" | "button",
  children: React.ReactNode
}

export const ButtonLogin: React.FC<IButtonLogin> = ({onClick, type, children}) => {
  return (
    <button onClick={onClick} type={type}>{children}</button>
  )
}