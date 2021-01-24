/*import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
/*import { Button }from "./Button"
import './Navbar.css'



class Navbar extends Component{
    
    state={clicked:false}
    
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})

    }
    render(){
        return(
            <nav className="NavBarItems">
                <h1>Online Passport System</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas-fa-times':'fas fa-bars'}></i>
                    </div>

                <ul className={this.state.clicked ? 'nav-menu active' :'nav-menu'}>
                
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                   {item.title}
                                </a>
                            </li>
                        )

                    }
                    )}
                    
                </ul>
            
            </nav>
        )
    }
}
export default Navbar*/

import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component{
    render()
    {
        return(
            <div>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav">  
                <li> 
                    <h5 className="text-white mt-2">Online Passport System</h5>
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link font-weight-bold mt-1" to="/HomePage">Home</Link>
                </li>
            </ul> 
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/applicantRegistrationForm">SignUp</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/LoginForm">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Contact Us</Link>
                </li>

            </ul>
            </nav>
            </div>
        );
    }
}
export default Navbar;