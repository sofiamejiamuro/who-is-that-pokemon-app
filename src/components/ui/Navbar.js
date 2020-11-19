import React from 'react'
import { Link, NavLink } from 'react-router-dom';

// Styles 
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';

export const Navbar = () => {
    return (
        <AppBar position="static">
          <Toolbar>
            <Link 
              className="navbar-brand" 
              to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
              <div className="navbar-nav">
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/marvel"
                >
                    Marvel
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/dc"
                >
                    DC
                </NavLink>
              </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                  <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/login"
                  >
                    Logout
                  </NavLink>
              </ul>
            </div>
          </Toolbar> 
        </AppBar>
    )
}
