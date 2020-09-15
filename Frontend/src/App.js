import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import 'utils/FontAwesomeLibrary';

import HuespedesPage from 'features/huespedes/Page'
import HabitacionesPage from 'features/habitaciones/Page'
import CalendarioPage from 'features/calendario/Page'
import LoginPage from 'features/login/Page'

import Navbar from 'components/navbar/Navbar'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route component={AuthRoutes}/>
      </Switch>
    </Router>
  )
}

const AuthRoutes = () => {
  if (localStorage.getItem('user') == null)
    return <Redirect
              to={{
                pathname: "/"
              }}
          />
  else
    return (
    <div>
      <Navbar />
      <Route exact path="/habitaciones" component={HabitacionesPage} />
      <Route exact path="/huespedes" component={HuespedesPage} />
      <Route exact path="/calendario" component={CalendarioPage} />
    </div>
)};

export default App
