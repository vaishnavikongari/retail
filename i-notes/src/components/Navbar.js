import { React, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from "react-router";
import './Navbar.css';

const Navbar = (props) => {
    let history=useNavigate() ;   

const handlelogout=()=>{
    localStorage.removeItem('token')
    history("/login")
    props.showalert("Logout successfully", "success : ")



}
    let location = useLocation();

    useEffect(() => {
        // Google Analytics
        // console.log(location.pathname)
    }, [location]);

    return (
                <div >


        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Retail</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">about</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?<form className="d-flex" role="search">
                            {/* <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link> */}
                            <Link className="btn btn-primary mx-2" to="/login1" role="button">Login</Link>

                            {/* <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link> */}
                            <Link className="btn btn-primary mx-2" to="/signup1" role="button">Signup</Link>

                        </form>:<button  onClick={handlelogout} className='btn btn-primary'>Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
