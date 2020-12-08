import React, {useState} from 'react'
import Base from '../core/Base'
import {Link} from 'react-router-dom'
import {signup} from '../auth/helper/index'

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const {name, email, password, error, success} = values

    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        setValues({...values, error: false})
        signup({name, email, password})
        .then(data => {
            console.log(data)
        })
        // .catch(err => console.log(err))
    }

    const signUpForm = () => {
        return (
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>
                    <form>
                        <div className='form-group'>
                            <label className='text-light'>Name</label>
                            <input className='form-control' type='text' value={name} onChange={handleChange('name')} />
                        </div>
                        <div className='form-group'>
                            <label className='text-light'>Email</label>
                            <input className='form-control' type='email' value={email} onChange={handleChange('email')} />
                        </div>
                        <div className='form-group'>
                            <label className='text-light'>Password</label>
                            <input className='form-control' type='password' value={password} onChange={handleChange('password')} />
                        </div>
                        <button onClick={onSubmit} type='submit' className='btn-block btn btn-success'>
                            SIgnup NoW
                        </button>
                    </form>
                </div>
            </div>
        )
    } 

    return (
        <Base title='Signup Page' description='Create your free account'>
        {signUpForm()}
            <p className='mt-3 text-center text-white'>{JSON.stringify(values)}</p>
        </Base>
    )
}

export default Signup
