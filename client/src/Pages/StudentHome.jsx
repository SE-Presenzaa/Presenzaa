import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'
import '../Style/Home.css'

const Home = () => {
    const store = useSelector((store) => store)
    const history = useHistory()

    return (
        <div  id="mynewbg">
            {store.student.isAuthenticated ? <>
                <div>
                <HomeHelper />
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8 mt-5">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card" id="mytable">
                                        <img className="card-img-top" src={store.student.student.student.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.student.student.student.name}</h5>
                                            <h5 className="card-title">{store.student.student.student.registrationNumber}</h5>
                                            <a type="button" class="btn btn-success" href='/student/updateProfile'><i class="fas fa-refresh" aria-hidden="true"></i> | UPDATE PROFILE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7" id="mytable">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{store.student.student.student.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td>{store.student.student.student.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth</td>
                                                <td>{store.student.student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>Year</td>
                                                <td>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{store.student.student.student.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Section</td>
                                                <td>{store.student.student.student.section}</td>
                                            </tr>
                                            <tr>
                                                <td>Batch</td>
                                                <td>{store.student.student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>{store.student.student.student.gender ? store.student.student.student.gender : 
                                                
                                                   "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>{store.student.student.student.studentMobileNumber ?
                                                    store.student.student.student.studentMobileNumber : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <td>Aadhar Card</td>
                                                <td>{store.student.student.student.aadharCard ? store.student.student.student.aadharCard : "NA"} </td>
                                            </tr>
                                            <tr>
                                                <td>Father Name</td>
                                                <td>{store.student.student.student.fatherName ? store.student.student.student.fatherName : "NA" }</td>
                                            </tr>
                                            <tr>
                                                <td>Father Contact Number</td>
                                                <td>{store.student.student.student.fatherMobileNumber ? store.student.student.student.fatherMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">

                        </div>

                    </div>
                </div>
                <br />
                <br />
            </div>

            </> : (history.push('/'))}
        </div>

    )
}

export default Home
