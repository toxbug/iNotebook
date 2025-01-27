import React from 'react'
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate()
  let location = useLocation();
  React.useEffect(() => {
    // Google Analytics
    // ga('send', 'pageview');
    console.log(location.pathname)
  }, [location]);

  const logOut=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand active">iNotebook</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/services"?"active":""}`} to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/library"?"active":""}`}  to="/library">Library</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/aboutus"?"active":""}`}  to="/aboutus">AboutUs</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/contact"?"active":""}`}  to="/contact">Contact Us</Link>
        </li>
      </ul>

      {!localStorage.getItem('token')?<form className="d-flex">
      <Link class="btn btn-primary mx-2" to="/login" role="button" >LogIn</Link> 
      <Link class="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link></form>:<button className='btn btn-primary mx-2'onClick={logOut} role='button'>Log out</button>}
    </div>
  </div>
</nav>
    </>
  )
}
