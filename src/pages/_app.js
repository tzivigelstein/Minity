import './index.css'
import { SessionProvider } from 'next-auth/react'
import AlertState from '../context/alerts/alertState'
import AuthState from '../context/auth/authState'
import ProjectState from '../context/projects/projectState'
import TaskState from '../context/tasks/tasksState'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AuthState>
        <AlertState>
          <ProjectState>
            <TaskState>
              <Component {...pageProps} />
            </TaskState>
          </ProjectState>
        </AlertState>
      </AuthState>
    </SessionProvider>
  )
}
