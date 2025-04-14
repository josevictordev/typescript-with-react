import React from "react"
import {v4 as uuid} from "uuid"
import { ButtonLogin } from "./components/ButtonLogin"
import { useUserLoagged } from "../../shared/hooks"

export const Login = () =>{
  const [email, setEmail] = React.useState<string>("")
  const [edit, setEdit] = React.useState("")
  const [password, setPassword] = React.useState<string>("")
  const [errorEmail, setErrorEmail] = React.useState<boolean>(false)
  const [errorPassword, setErrorPassword] = React.useState<boolean>(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const {userName, userEmail, setUsers, users} = useUserLoagged()
  
  function handleSubmit() {
    const emailError: boolean = email.trim() === ""
    const passwordError: boolean = password.trim() === ""

    setErrorEmail(emailError)
    setErrorPassword(passwordError)

    if (emailError || passwordError) return
    
    if (edit !== "") {
      setUsers(users.map(user => user.id === edit ? {...user, email, password} : user))
    }else{
      addUser(email, password)
    }
    setEdit("")
    setPassword("")
    setEmail("")
  }

  const addUser = (email: string, password: string) =>{
    const idUser = uuid()
    setUsers([...users, {id: idUser, email, password}])
  }

  function onChangePassword({target}: React.ChangeEvent<HTMLInputElement>) {
    if (target.value.length !== 0) {
      setErrorPassword(false)
    }
    setPassword(target.value)
  }
  function onChangeEmail({target}: React.ChangeEvent<HTMLInputElement>) {
    if (target.value.length !== 0) {
      setErrorEmail(false)
    }
    setEmail(target.value)
  }

  function handleDelete(id: string) {
    setUsers(users.filter(user => user.id !== id))
  }

  function handleEditUser(id: string) {
    const userEdit = users.find(user => user.id === id)
    if(userEdit){
      setEmail(userEdit.email)
      setPassword(userEdit.password)
      setEdit(id)
    }
  }
  
  return(
    <div>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
        <label htmlFor="email">
          <span>Email</span>
          <input ref={inputRef} onChange={onChangeEmail} value={email} type="email" id="email" placeholder="Digite o seu email..."/>
          {errorEmail && <p>Email invalido!</p>}
        </label>
        <label htmlFor="password">
          <span>Senha</span>
          <input ref={inputRef} onChange={onChangePassword} value={password} type="password" id="password" placeholder="Digite o seu email..."/>
          {errorPassword && <p>Senha invalido!</p>}
        </label>
        <button type="button" onClick={handleSubmit}>Entrar</button>
      </form>
      <div>
        {users && users.map(user => (
          <div key={user.id} style={{padding: "0.5rem", border: "solid 1px", margin: "1rem 0"}}>
            <p>Id: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Senha: {user.password}</p>
            <ButtonLogin type="button" onClick={() => handleEditUser(user.id)}>Editar</ButtonLogin>
            <ButtonLogin type="button" onClick={() => handleDelete(user.id)}>Deletar</ButtonLogin>
          </div>
        ))}
      </div>
      {userName && <>Nome user: {userName}</>}
      <br />
      {userEmail && <>Email user: {userEmail}</>}
    </div>
  )
}