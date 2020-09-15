import React from 'react';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Projects from './components/projects/Projects';
import AuthState from './context/auth/authState'
import TaskState from './context/tasks/tasksState';
import AlertState from './context/alerts/alertState'
import ProjectState from './context/projects/projectState';
import PrivateRoute from './components/routes/PrivateRoute'
import tokenAuth from './config/token'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Revisar el token

const token = localStorage.getItem('token')
if (token) {
  tokenAuth(token)
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <PrivateRoute exact path='/projects' component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState >
  );
}

export default App;
