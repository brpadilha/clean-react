import React, { useContext } from 'react'
import { Spinner } from '..'
import styles from './form-status-styles.scss'
import Context from '@/presentation/context/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)

  const { isLoading, mainError } = state

  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}
      {mainError && <span data-testid="main-error" className={styles.error}>{mainError}</span>}
    </div>
  )
}

export default FormStatus
