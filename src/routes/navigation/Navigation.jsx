import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import './navigation.css';

const Navigation = () => {
  return (
    <Fragment>
            <div className="navigation-container">
                <Link className="logo-container" to='/'>
                    <img src="" className="" alt="" />
                </Link>
                <div className="nav-links">
                    <Link className="nav-link" to='/'>
                      HOME
                    </Link>
                    <Link className="nav-link" to='about'>
                        ABOUT
                    </Link>
                    <Link className="nav-link" to='contact'>
                       CONTACT
                    </Link>

                </div>
            </div>

            <Outlet />
        </Fragment>
  );
}
 
export default Navigation;