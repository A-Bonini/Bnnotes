import React, { Fragment, useState } from 'react';
import { Navbar, Container, Column, Button, Dropdown } from 'rbx';
import LogoImage from '../../assets/images/logo-white.png';
import "../../styles/header.scss";
import UserService from '../../services/users';
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function HeaderLogged(props) {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [user, setUser] = useState(localStorage.getItem('user'));
  
    const logOut = async () => {
      UserService.logout();
      setRedirectToHome(true);
    }

    const OpenMenu = (element) => {
      if(props.isOpen == false){
        props.setIsOpen(true);
      } else {
        props.setIsOpen(false);
      }
    }
  
    if (redirectToHome == true)
      return <Navigate to="/"/>
  
    return (
      <Navbar color="custom-purple" className="navbar-logged">
          <Container id="container">
            <Navbar.Brand>
                <Link to="/notes">
                    <img src={LogoImage} />
                </Link>
                <Navbar.Burger 
                    className="navbar-burger burger" 
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbar-menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Navbar.Burger>
            </Navbar.Brand>
    
            <Navbar.Menu>
            <Navbar.Segment as="div" className="navbar-item navbar-start" align="start">
              <Navbar.Item as="div">
                <button 
                  className={!props.isOpen ? 'my-button' : 'my-button click'}
                  onClick={e => OpenMenu()}>
                      <FontAwesomeIcon icon={faList} className='iconButtonMenu'/>
                </button>
              </Navbar.Item>
            </Navbar.Segment>
            <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                <Navbar.Item as="div">
                <Dropdown>
                    <Dropdown.Trigger>
                    <Button className="button" color="white" outlined>
                        <span>{JSON.parse(user).name} ▼</span>
                    </Button>
                    </Dropdown.Trigger>
                    <Dropdown.Menu>
                    <Dropdown.Content>
                        <Dropdown.Item as="div">
                        <Link to="/users/edit">User Edit</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as="div">
                        <a href="#" onClick={e => logOut()}>LogOut</a>
                        </Dropdown.Item>
                    </Dropdown.Content>
                    </Dropdown.Menu>
                </Dropdown>
                </Navbar.Item>
            </Navbar.Segment>
            </Navbar.Menu>
        </Container>
      </Navbar>
    )
  }
  
  export default HeaderLogged;