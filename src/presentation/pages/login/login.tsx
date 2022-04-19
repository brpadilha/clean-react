import Footer from '@/presentation/components/footer/footer'
import { FormStatus, Input, LoginHeader } from '@/presentation/components'
import React, { useEffect, useState } from 'react'
import styles from './login-styles.scss'
import Context from '@/presentation/context/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type LoginProps = {
  validation: Validation
}

const Login: React.FC<LoginProps> = ({ validation }: LoginProps) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: '',
    loading: false
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setState({
      ...state,
      isLoading: true
    })
  }

  return (
    <div className={styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          <button
            data-testid="submit"
            disabled={!!state.emailError || !!state.passwordError}
            className={styles.submit}
            type="submit"
          >
            Entrar
          </button>
          <span className={styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
