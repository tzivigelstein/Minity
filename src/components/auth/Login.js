import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext'
import AuthContext from '../../context/auth/authContext'

const Login = (props) => {

    const authContext = useContext(AuthContext)
    const { logIn, msg, auth } = authContext

    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext

    useEffect(() => {
        if (auth) {
            props.history.push('/projects')
        } else if (msg) {
            showAlert(msg.msg, msg.category)
        }
        //eslint-disable-next-line
    }, [msg, auth, props.history])

    //State de inicio de sesión

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    //Extraer del state user

    const { email, password } = user

    //Lectura de datos del form

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //Submit del login

    const onSubmit = e => {

        e.preventDefault()

        //Validacion de los datos
        if (email.trim() === '' || password.trim() === '') {
            showAlert('All fields are required', 'alerta-error')
            return
        }

        //Pasarlo al action
        logIn({
            email,
            password
        })
    }

    return (
        <div className='form-usuario'>
            {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}
            <div className='contenedor-form sombra-dark'>
                <h1>Login</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type="text"
                            id='email'
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            placeholder='Password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <input
                            type="submit"
                            value='Login'
                            className='btn btn-primario btn-block'
                        />
                    </div>
                </form>
                <Link to={'/signup'} className='enlace-cuenta'>
                    Dont have an account?. Signup
                </Link>
            </div>
        </div>
    );
}

export default Login;