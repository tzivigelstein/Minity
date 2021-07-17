import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Main from './pages/Main'
import Tasks from './pages/Tasks'
import AuthState from './context/auth/authState'
import AlertState from './context/alerts/alertState'
import ModalState from './context/modal/modalState'
import ProjectState from './context/projects/projectState'
import TaskState from './context/tasks/tasksState'
import PrivateRoute from './components/Routes/PrivateRoute'
import tokenAuth from './config/token'

const token = localStorage.getItem('token')

if (token) {
  tokenAuth(token)
}

export default function App() {
  return (
    <AuthState>
      <AlertState>
        <ModalState>
          <ProjectState>
            <TaskState>
              <Router>
                <Switch>
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <PrivateRoute exact path="/projects" component={Main} />
                  <PrivateRoute exact path="/:projectId/tasks" component={Tasks} />
                </Switch>
              </Router>
            </TaskState>
          </ProjectState>
        </ModalState>
      </AlertState>
    </AuthState>
  )
}
