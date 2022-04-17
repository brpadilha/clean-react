import React from 'react'
import { Spinner } from '..'
import styles from './form-status-styles.scss'

type Props = {
  errorMessage: string
}

const FormStatus: React.FC<Props> = ({ errorMessage }: Props) => {
  return (
    <div className={styles.errorWrap}>
      <Spinner className={styles.spinner} />
      <span className={styles.error}>{errorMessage}</span>
    </div>
  )
}

export default FormStatus
