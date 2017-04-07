import React, { PropTypes, createElement } from 'react'
import { Redirect as ReactRedirect, Route as ReactRoute } from 'react-router-dom'
import { GUEST, MEMBER } from './type'

const AppRoute = ({ component, permit, userType, Redirect, Route, ...routeProps }) => {
  const redirect = user => {
    switch (user) {
      case GUEST: {
        return <Redirect to="/login" />
      }
      case MEMBER: {
        return <Redirect to="/" />
      }
      default : {
        return <Redirect to="/" />
      }
    }
  }

  const loadComponent = props => (
    permit.includes(userType) ? createElement(component, props) : redirect(userType)
  )

  return (
    <Route {...routeProps} render={loadComponent} />
  )
}

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  permit: PropTypes.arrayOf(PropTypes.string),
  userType: PropTypes.string,
  Redirect: PropTypes.func,
  Route: PropTypes.func
}

AppRoute.defaultProps = {
  permit: [],
  userType: 'UNKNOWN',
  Redirect: ReactRedirect,
  Route: ReactRoute
}

export default AppRoute