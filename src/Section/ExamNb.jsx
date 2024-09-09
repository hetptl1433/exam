import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/home/logo.png';
import { getIndustryUserMasterDetails } from '../Function/ExamIndex';
import { Dropdown } from 'react-bootstrap';

const ExamNb = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState({})
   const handleLogout = () => {
     // Remove the token and user ID from local storage
     try{
    //  localStorage.removeItem("token");
    //  localStorage.removeItem("userId");

     // Redirect to the login page
     window.location.replace("/");
     }
     catch(err){
      console.log(err);
     }
   };

  useEffect(()=>{
    getIndustryUserMasterDetails(userId).then((response) => {
      setUser(response.data);

    });

   
  },[userId])
   
  return (
    <div>
      <header className="main-header style-three">
        <div className="header-top">
          <div className="container">
            <div className="inner-container clearfix">
              <ul className="header-info pull-left">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <a href="#">
                    2nd Floor, Productivity House, Productivity Road, Alkapuri,
                    Baroda-390007, Gujarat, India
                  </a>
                </li>
              </ul>
              <ul className="header-nav pull-right">
                <li>
                  <Dropdown>
                    <Dropdown.Toggle
                      href="#"
                      id="dropdown-basic"
                      variant="transperent"
                    >
                      {" "}
                      <i className="fa fa-user" aria-hidden="true"></i> &nbsp;
                      {user.Name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="text-center">
                      <Dropdown.Item href="#" className="text-black">
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#"
                        onClick={handleLogout}
                        className="text-black"
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <a href="#">Help & Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="outer-container">
            <div className="container">
              <div className="main-box clearfix">
                <div className="logo-box pull-left">
                  <figure className="logo">
                    <Link to="/">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </figure>
                </div>
                <div className="menu-area pull-right clearfix">
                  {/* Mobile Navigation Toggler */}
                  <div className="mobile-nav-toggler">
                    <i className="icon-bar"></i>
                    <i className="icon-bar"></i>
                    <i className="icon-bar"></i>
                  </div>
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation clearfix">
                        <li>
                          <a href="tel:912652312431">
                            {" "}
                            <i className="fas fa-phone-volume"></i> &nbsp; +91
                            0265 2312431
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@bpcindia.org">
                            {" "}
                            <i className="far fa-envelope"></i> &nbsp;
                            info@bpcindia.org
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ExamNb
