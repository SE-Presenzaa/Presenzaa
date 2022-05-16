import React, {useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {facultyLogout} from '../redux/action/facultyAction'
import '../Style/adminLogin.css'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import DarkModeToggle from "react-dark-mode-toggle";


const Home = () => {
    const store = useSelector((store)=>store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history.push('/')
    }
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
        });
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
        <div className="container-fluid">
            {/* <Header /> */}
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <h4 className="navbar-brand mt-1" href="/faculty"><Link to="/faculty">PRESENZAA</Link></h4>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {/* <li className="nav-item active">
                                    <button type="button" className="btn"><li>Welcome {name.toUpperCase()}</li></button>
                                </li> */}
                                {/* <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/updateProfile"><li>UPDATE PROFILE</li></Link></button>
                                </li> */}
                                <li className="nav-item">
                                    <button type="button" className="btn btn-warning" style={{marginLeft: '20px' }}><Link to="/attendenceFaculty"><li><i class="fa-regular fa-calendar-days"></i> MARK ATTENDANCE</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-warning" style={{marginLeft: '20px' }}><Link to="/faculty/uploadMarks"><li><i class="fa-solid fa-square-poll-vertical"></i> UPLOAD MARKS</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-warning" style={{marginLeft: '20px' }}><Link to="/faculty/updatePassword"><li><i class="fa-solid fa-key"></i> UPDATE PASSWORD</li></Link></button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button type="button" className="btn" id="namepadding">Welcome, {name.toUpperCase()}</button>
                            <button style={{listStyle:"none", marginRight: '20px'}} onClick={() => setState({ isPaneOpen: true })} type="button" className="btn btn-info"><li><i class="fa-solid fa-gear"></i> SETTINGS</li></button>
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
                            <button style={{listStyle:"None"}} onClick={logoutHandler} type="button" className="btn btn-danger"><li><i class="fa-solid fa-power-off"></i> LOGOUT</li></button>
                        </div>
                            
                        
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home
