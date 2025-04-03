import React, { use } from "react"
import {v4 as uuid} from "uuid"
import { InputLogin } from "./components/InputLogin"

export const Login = () =>{
  const [email, setEmail] = React.useState<string>("")
  const [edit, setEdit] = React.useState("")
  const [password, setPassword] = React.useState<string>("")
  const [errorEmail, setErrorEmail] = React.useState<boolean>(false)
  const [errorPassword, setErrorPassword] = React.useState<boolean>(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  type User = {
    id: string,
    email: string,
    password: string,
  }

  const [users, setUsers] = React.useState<User[]>(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });
  
  // Para salvar:
  React.useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  
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
        <InputLogin 
          label="email" 
          id="email"
          type="email"
          value={email}
          errorEmail={errorEmail}
          onChange={(e)=>onChangeEmail(e)} 
          onPressEnter={()=> inputRef.current?.focus()}
        />
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
            <button onClick={()=> handleEditUser(user.id)}>Editar</button>
            <button onClick={()=> handleDelete(user.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  )
}