import React, { PropTypes } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../../_assets_/style.css'
import logo from './_assets_/logo.svg'
import style from './_assets_/style.css'

const LayoutMain = ({ children, isOpen, toggleNav, Link }) => (
  <Container>
    <Navbar color="faded" light toggleable>
      <NavbarToggler right onClick={toggleNav} />
      <NavbarBrand tag={Link} to="/" >
        <img src={logo} className={style.logo} alt="logo" />React Youtuber
      </NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar >
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/register">Register</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    {children}
  </Container>
)

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  toggleNav: PropTypes.func.isRequired,
  Link: PropTypes.func
}

LayoutMain.defaultProps = {
  isOpen: false,
  Link: LinkRouter
}

export default LayoutMain