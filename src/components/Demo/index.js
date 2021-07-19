import React from 'react'
import styles from './index.module.css'
import TaskChip from '../Tasks/TaskChip'

const Demo = () => {
  return (
    <div className={styles.container}>
      <TaskChip task={{ name: 'Demo', done: false, id: 0 }} />
      <TaskChip task={{ name: 'Demo', done: false, id: 1 }} />
      <TaskChip task={{ name: 'Demo', done: false, id: 1 }} />
    </div>
  )
}

export default Demo
