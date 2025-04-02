import React from "react"

export const Login = () =>{
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [errorForm, setErrorForm] = React.useState({
    errorEmail: false, errorPassword: false
  })

  function handleSubmit() {
    const emailError = email.trim() === ""
    const passwordError = password.trim() === ""
    if (emailError && passwordError) {
      setErrorForm({errorEmail: true, errorPassword: true})
      return
    }
    console.log('enviando...');
    
  }

  function onChangePassword({target}: React.ChangeEvent<HTMLInputElement>) {
    if (target.value.length !== 0) {
      setErrorForm((prev)=>({...prev, errorPassword: false}))
    }
  }
  function onChangeEmail({target}: React.ChangeEvent<HTMLInputElement>) {
    if (target.value.length !== 0) {
      setErrorForm((prev)=>({...prev, errorEmail: false}))
    }
  }
  
  return(
    <form style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      <label htmlFor="user">
        <span>Email</span>
        <input onChange={onChangeEmail} type="email" id="email" placeholder="Digite o seu nome..."/>
        {errorForm.errorEmail && <p>Email invalido!</p>}
      </label>
      <label htmlFor="password">
        <span>Senha</span>
        <input onChange={onChangePassword} type="password" id="password" placeholder="Digite o seu email..."/>
        {errorForm.errorPassword && <p>Senha invalido!</p>}
      </label>
      <button type="button" onClick={handleSubmit}>Entrar</button>
    </form>
  )
}