import React from 'react'
import { 
    Nav, NavLink, NavMenu
} from "./NavbarStyles"

export const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
            
                <NavLink to="/" activeStyle>
                    Homepage
                </NavLink>
            
            
                <NavLink to="/scheduler" activeStyle>
                    Scheduler
                </NavLink>
            
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
            
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
            </NavMenu>
        </Nav>
    );
}
