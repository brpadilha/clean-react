import React, { memo } from 'react'
import styles from './input-styles.scss'

interface Props {
  name: string
  type: string
  placeholder: string
}

const Input: React.FC<Props> = ({ name, type, placeholder }) => {
  return (
    <div className={styles.inputWrap}>
      <input type={type} name={name} placeholder={placeholder} />
      <span className={styles.status}>🔴</span>
    </div>
  )
}

export default memo(Input)
