import React from 'react'
import styles from './spinner-styles.scss'

// make component acept others styles
type Props = React.HTMLAttributes<HTMLElement>;

const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div
      {...props}
      data-testid="spinner"
      // eslint-disable-next-line react/prop-types
      className={[styles.spinner, props.className].join(' ')}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Spinner
