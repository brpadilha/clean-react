import React from 'react'
import styles from './spinner-styles.scss'

// make component acept others styles
type Props = React.HTMLAttributes<HTMLElement>;

const Spinner: React.FC<Props> = (props: Props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div {...props} className={[styles.spinner, props.className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Spinner
