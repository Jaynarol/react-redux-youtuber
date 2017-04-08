import React from 'react'
import PropTypes from 'prop-types'
import { Link as LinkRouter } from 'react-router-dom'
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../../_assets_/style.css'
import logo from './_assets_/logo.svg'
import style from './_assets_/style.css'

const LayoutMain = ({ children, toggleNav, signoutAuth, isOpen, isMember, Link }) => (
  <Container>
    <Navbar color="faded" light toggleable>
      <NavbarToggler right onClick={toggleNav} />
      <NavbarBrand tag={Link} to="/" >
        <img src={logo} className={style.logo} alt="logo" />React Youtuber
      </NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
        { isMember ?
          <Nav className="ml-auto" navbar >
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/" onClick={signoutAuth} >Logout</NavLink>
            </NavItem>
          </Nav>
          :
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
        }
      </Collapse>
    </Navbar>
    {children}
  </Container>
)

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
  toggleNav: PropTypes.func.isRequired,
  signoutAuth: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  isMember: PropTypes.bool,
  Link: PropTypes.func
}

LayoutMain.defaultProps = {
  isOpen: false,
  isMember: false,
  Link: LinkRouter
}

export default LayoutMain