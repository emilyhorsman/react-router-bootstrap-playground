import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import './styles.scss'

const UsersDomain = {
  users: [
    {
      name: 'Emily',
      id: 1
    },
    {
      name: 'Alice',
      id: 2
    }
  ]
}

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    )
  }
}

class Stuffums extends Component {
  render() {
    return (
      <div>
        <h2>Stuffums</h2>
        <ul>
          {UsersDomain.users.map((user) => (
            <li key={user.id}><Link to={`/stuffums/${user.id}`}>{user.name}</Link></li>
          ))}
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class Stuffum extends Component {
  render() {
    const { id } = this.props.params
    const user = UsersDomain.users.find((user) => user.id === Number(id))

    return (
      <div>
        <p>Hi {user.name}</p>
      </div>
    )
  }
}

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <Link to="/" className="navbar-brand">Playground</Link>
        <ul className="nav navbar-nav">
          {React.Children.map(this.props.children, (link) => (
            <li className="nav-item">{link}</li>
          ))}
        </ul>
      </nav>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav>
          <Link to="/dashboard" activeClassName="active" className="nav-link">Dashboard</Link>
          <Link to="/stuffums" activeClassName="active" className="nav-link">Stuffums</Link>
        </Nav>

        <div className="container">
          <p>Fooey</p>
        </div>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard} />
      <Route path="stuffums" component={Stuffums}>
        <Route path="/stuffums/:id" component={Stuffum} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
