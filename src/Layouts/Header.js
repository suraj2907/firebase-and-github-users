import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

import {
  Nav,
  Navbar,
  NavbarText,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  NavLink,
  NavItem,
} from "reactstrap";

const Header = () => {
  const context = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  const toggler = () => setToggle(!toggle);

  return (
    <Navbar expand="md" dark style={{backgroundColor: "black"}}>
      <NavbarBrand>
        <Link style={{ textDecoration: "none" }} to="/">
          Suraj
        </Link>
      </NavbarBrand>
      <NavbarText>
        {context.user?.email ? <div>{context.user.email}</div> : ""}
      </NavbarText>

      <NavbarToggler onClick={toggler} />
      <Collapse isOpen={toggle} navbar>
        <Nav className="ms-auto" justified>
          {context.user ? (
            <NavItem>
              <NavLink tag={Link} to="/" onClick={() => context.setUser(null)}>
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              {" "}
              <NavItem>
                <NavLink>Sigin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Sigup</NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
