import React from "react"

export const Login = () =>{
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [errorEmail, setErrorEmail] = React.useState(false)
  const [errorPassword, setErrorPassword] = React.useState(false)

  function handleSubmit() {
    const emailError = email.trim() === ""
    const passwordError = password.trim() === ""

    setErrorEmail(emailError)
    setErrorPassword(passwordError)

    if (emailError || passwordError) return
    console.log('enviando...');
    
  }

  function onChangePassword({target}: React.ChangeEvent<HTMLInputElement>) {
    if (target.value !== "") {
      setErrorPassword(false)
    }
  }
  function onChangeEmail({target}: React.ChangeEvent<HTMLInputElement>) {
    if (target.value !== "") {
      setErrorEmail(false)
    }
  }
  
  return(
    <form style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      <label htmlFor="user">
        <span>Email</span>
        <input onChange={onChangeEmail} type="email" id="email" placeholder="Digite o seu nome..."/>
        {errorEmail && <p>Email invalido!</p>}
      </label>
      <label htmlFor="password">
        <span>Senha</span>
        <input onChange={onChangePassword} type="password" id="password" placeholder="Digite o seu email..."/>
        {errorPassword && <p>Senha invalido!</p>}
      </label>
      <button type="button" onClick={handleSubmit}>Entrar</button>
    </form>
  )
}