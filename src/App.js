import React from 'react'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'
import Main from './components/Main'
import AuthState from './context/auth/authState'
import AlertState from './context/alerts/alertState'
import ModalState from './context/modal/modalState'
import ProjectState from './context/projects/projectState'
import TaskState from './context/tasks/tasksState'
import PrivateRoute from './components/Routes/PrivateRoute'
import tokenAuth from './config/token'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const token = localStorage.getItem('token')
if (token) {
  tokenAuth(token)
}

function App() {
  return (
    <AuthState>
      <AlertState>
        <ModalState>
          <ProjectState>
            <TaskState>
              <Router>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/signup" component={SignUp} />
                  <PrivateRoute exact path="/projects" component={Main} />
                </Switch>
              </Router>
            </TaskState>
          </ProjectState>
        </ModalState>
      </AlertState>
    </AuthState>
  )
}

export default App
