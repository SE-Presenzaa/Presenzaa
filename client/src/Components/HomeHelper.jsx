import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout, newerChats, previousChats} from '../redux/action/studentAction'
import '../Style/adminLogin.css'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import DarkModeToggle from "react-dark-mode-toggle";


const Home = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newerChats(store.student.student.student.name))
        dispatch(previousChats(store.student.student.student.name))
    }, [store.student.newerChats.length])
    const logoutHandler = () => {
        dispatch(studentLogout())
        history.push('/')
    }
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
        });
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <h4 className="navbar-brand mt-1" href=""><Link to="/home">PRESENZAA</Link></h4>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                
                                {/* <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/student/updateProfile"><li>UPDATE PROFILE</li></Link></button>
                                </li> */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" class="btn btn-warning" style={{marginRight:"20px"}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa-regular fa-calendar-days"></i> ACADEMIC </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/student/testPerformance">Test Performance</Link>
                                        <Link className="dropdown-item" to="/student/attendence">Attendance</Link>
                                        <Link className="dropdown-item" to="/student/getAllSubjects">Student Subject List</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-warning" style={{marginRight:"20px"}}><Link to="/studentDetails"><li><i class="fa-solid fa-square-poll-vertical"></i> NEW CONVERSATION ({store.student.newerChats.length})</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-warning" style={{marginRight:"20px"}}><Link to="/student/updatePassword"><li><i class="fa-solid fa-key"></i> UPDATE PASSWORD</li></Link></button>
                                </li>
                               
                            </ul>
                           
                        </div>

                        <div>
    
                            <button type="button" className="btn">Welcome, {name.toUpperCase()}</button>
                            
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
                            <button style={{listStyle:"none"}} onClick={logoutHandler} type="button" className="btn btn-danger"><li><i class="fa-solid fa-power-off"></i> LOGOUT</li></button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home
