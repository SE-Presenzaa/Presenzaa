import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { adminLogout } from '../redux/action/adminAction'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import '../Style/adminLogin.css'
import DarkModeToggle from "react-dark-mode-toggle";

const Home = () => {
    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.admin.admin.name) {
            setName(store.admin.admin.name)
        }
    }, [store.admin.admin.name])
    const history = useHistory()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(adminLogout())
        history.push('/')
    }
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
        });
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
        <div className="container-fluid">
          
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h4 className="navbar-brand mt-1" href=""><Link to="/admin">PRESENZAA</Link></h4>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item active">
                            <button type="button" className="btn"><li>{name.toUpperCase()}</li></button>
                        </li> */}
                        <li className="nav-item">
                            <button type="button" className="btn btn-warning" style={{marginRight: '15px'}}><Link to="/admin/addFaculty"><li>ADD FACULTY</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-warning" style={{marginRight: '15px'}}><Link to="/admin/addStudent"><li>ADD STUDENT</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-warning" style={{marginRight: '15px'}}><Link to="/admin/addSubject"><li>ADD SUBJECT</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-warning" style={{marginRight: '15px'}}><Link to="/admin/addAdmin"><li>ADD ADMIN</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-warning" style={{marginRight: '15px'}}><Link to="/admin/allFaculties"><li>OUR FACULTIES</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-warning" style={{marginRight: '15px'}}><Link to="/admin/allStudents"><li>OUR STUDENTS</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-warning" style={{marginRight: '0px'}}><Link to="/admin/allSubject"><li>SUBJECTS</li></Link></button>
                        </li>

                    </ul>
                </div>
                <div>
                    <button style={{listStyle:"none", marginRight: '20px', marginLeft: '-50px'}} onClick={() => setState({ isPaneOpen: true })} type="button" className="btn btn-info"><li><i class="fa-solid fa-gear"></i> SETTINGS</li></button>
                    <SlidingPane
                        className="some-custom-class"
                        overlayClassName="some-custom-overlay-class"
                        isOpen={state.isPaneOpen}
                        title="SETTINGS"
                        subtitle="User Settings"
                        width="300px"
                        onRequestClose={() => {
                        // triggered on "<" on left top click or on outside click
                        setState({ isPaneOpen: false });
                        }}
                    >
                    
                    <div>
                    
                    <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                    <button type="button" className="btn btn-primary">Notifications OFF/ON</button>
                                    </li>
                                    <li className='nav-item'>
                                    <button type="button" className="btn btn-primary" style={{marginTop: '20px'}}>Switch Mode &nbsp;<DarkModeToggle
                                        onChange={setIsDarkMode}
                                        checked={isDarkMode}
                                        size={50}
                                        marginTop='20px'/>
                                    </button>
                                    </li>
                                    <li className='nav-item'>
                                    <button type="button" className="btn btn-primary" style={{marginTop: '20px'}}>Enable/disable 2FA</button>
                                    </li>
                                    <li className='nav-item'>
                                    <button type="button" className="btn btn-primary" style={{marginTop: '20px'}}>Contact the Developers</button>
                                    </li>
                                    <li className='nav-item'>
                                    <button type="button" className="btn btn-primary" style={{marginTop: '20px'}}>Privacy Policies</button>
                                    </li>
                                </ul>

                    </div>
                    <br />
                    </SlidingPane>
                    <button style={{listStyle:"none"}} onClick={logoutHandler} type="button" className="btn btn-danger"><li><i class="fa-solid fa-power-off"></i> LOGOUT</li></button>

                </div>
            </nav>
        </div>
    )
}

export default Home
