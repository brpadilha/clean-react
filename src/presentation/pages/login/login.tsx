import Footer from '@/presentation/components/footer/footer'
import { FormStatus, Input, LoginHeader } from '@/presentation/components'
import React from 'react'
import styles from './login-styles.scss'

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <LoginHeader />
      <form className={styles.form}>
        <h2>Login</h2>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button className={styles.submit} type="submit">
          Entrar
        </button>
        <span className={styles.link}>Criar conta</span>
        <FormStatus
          errorMessage='Usuário ou senha inválidos'
        />
      </form>
      <Footer />
    </div>
  )
}

export default Login
