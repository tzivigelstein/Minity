import React from 'react'
import './index.css'
import AlertState from '../context/alerts/alertState'
import AuthState from '../context/auth/authState'
import ProjectState from '../context/projects/projectState'
import TaskState from '../context/tasks/tasksState'
import useAuth from '../hooks/useAuth'

export default function App({ Component, pageProps }) {
  return (
    <AuthState>
      <AlertState>
        <ProjectState>
          <TaskState>
            <Component {...pageProps} />
          </TaskState>
        </ProjectState>
      </AlertState>
    </AuthState>
  )
}
