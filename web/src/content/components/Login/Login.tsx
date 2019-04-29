import * as React from 'react'
import { IApp } from '../../App'

interface ILogin extends IApp {

}

export default class Login extends React.PureComponent<ILogin> {
    render () {
        return (
            <div className='container'>
                <form className='form-signin' onSubmit={this.props.routeToCompare}>
                    <h2 className='form-signin-heading'>Please sign in</h2>
                    <label className='sr-only'>Email address</label>
                    <input 
                        type='email' 
                        id='inputEmail' 
                        className='form-control' 
                        placeholder='Email address' 
                        required={true} 
                        autoFocus={true}
                    />
                    <label className='sr-only'>Password</label>
                    <input 
                        type='password' 
                        id='inputPassword' 
                        className='form-control' 
                        placeholder='Password' 
                        required={true}
                    />
                    <div className='checkbox'>
                        <label>
                            <input type='checkbox' value='remember-me'/>
                            Remember me
                        </label>
                    </div>
                    <button className='btn btn-lg btn-primary btn-block'>Sign in</button>
                </form>
            </div>
        )
    }
}
