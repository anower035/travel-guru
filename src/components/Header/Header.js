import React, { useContext } from 'react';
import logo from '../../Images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import './Header.css';
import { Form, FormControl } from 'react-bootstrap';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      return (
            <div>
              <nav class="navbar navbar-expand-lg text-light pt-4 text-primary">
                <div class="container">
                  <Link to="/">
                    <img id="logo" class="navbar-brand custom-logo" src={logo} alt=""/>
                  </Link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-control="navbarSupportContent" aria-expanded="false" aria-lable="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportContent">
                    {/* <form class="form-inline my-2  mx-5 my-lg-0">
                      <input class="form-control mr-sm-3 custom-input p-3" type="search" placeholder="Search Your Destination" aria-label="search" a/>
                    </form> */}
                    <Form inline className="m-auto navBarSearchForm">
                        <i className="fas fa-search" aria-hidden="true"><FontAwesomeIcon icon={faSearch} color='white' /></i>
                        <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2 search-input" />
                    </Form>
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active mx-2">
                        <Link class="nav-link" to="/news">News</Link>
                      </li>
                      <li class="nav-item  mx-2">
                        <Link class="nav-link" to="/destination">Destination</Link>
                      </li>
                      <li class="nav-item  mx-2">
                        <Link class="nav-link" to="/blog">Blog</Link>
                      </li>
                      <li class="nav-item  mx-2">
                        <Link class="nav-link" to="/contact">Contact</Link>
                      </li>
                    </ul>
                    <Link to="/login" id="loginButton" class="btn btn-warning">Login</Link>
                    <button id="logoutButton" class="btn btn-primary my-2 my-sm-2" onClick={() => setLoggedInUser({})}>Logout</button>
                  </div>
                </div>
              </nav>
            </div> 
        
      );
  };
  
  export default Header;
  

