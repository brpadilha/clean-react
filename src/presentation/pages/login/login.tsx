import Footer from '@/presentation/components/footer/footer'
import { FormStatus, Input, LoginHeader } from '@/presentation/components'
import React, { useState } from 'react'
import styles from './login-styles.scss'
import Context from '@/presentation/context/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
};

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
          <Input name="password" type="password" placeholder="Digite sua senha" />
          <button className={styles.submit} type="submit">
          Entrar
          </button>
          <span className={styles.link}>Criar conta</span>
          <FormStatus/>
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
