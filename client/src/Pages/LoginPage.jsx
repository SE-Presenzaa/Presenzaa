import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { adminLogin } from '../redux/action/adminAction'
import classnames from 'classnames'
import '../Style/adminLogin.css'



const LoginPage = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch( )
    const [registrationNumber, setRegistrationNumber] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    useEffect(() => {
        if (store.admin.isAuthenticated) {
            history.push('/admin')
        }
    }, [store.admin.isAuthenticated])
    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    const fromHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminLogin({registrationNumber, password}))
       
    }

    useEffect(() => {
        if (store.error ||
            store.admin.isAuthenticated) {
            setIsLoading(false)
        }
        
        else {
            setIsLoading(true)
        }
    }, [store.error, store.admin.isAuthenticated])

    
    return (
        <div id="mybg">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row m-5">
                        <div className="col-md-8 m-auto border" style={{ backgroundColor: "#EFC050", borderRadius: "1.2rem", padding: "1rem 1rem 1rem 1rem" }}>
                            <div>
                                <h3 className="text-center" style = {{color:"white"}} >ADMIN</h3>
                                <form noValidate onSubmit={fromHandler}>
                                    <div className="form-group">
                                        <label htmlFor="emailId" style = {{color:"white"}}>Registration Number</label>
                                        <input onChange={(e) => setRegistrationNumber(e.target.value)} type="text" value={registrationNumber} className={classnames("form-control form-control-lg",
                                            {'is-invalid' : error.registrationNumber
                                            
                                            })} id="emailId" />
                                        {error.registrationNumber && (<div className="invalid-feedback">{error.registrationNumber}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="passwordId" style = {{color:"white"}} >Password</label>
                                        <input onChange={(e) => setPassword(e.target.value)} value={password} className={classnames("form-control form-control-lg", {
                                            "is-invalid": error.password
                                        })} value={password} type="password" id="passwordId" />
                                        {error.password && (<div className="invalid-feedback">{error.password}</div>)}
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-1">
                                            {
                                                isLoading && <div class="spinner-border text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {!isLoading && <button type="submit" className="btn btn-info btn-block" style = {{color:"white"}}>Login</button>}
                                </form>

                            </div>
                        </div>
                    </div>
                    
                    <div className="row m-5">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
