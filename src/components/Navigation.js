import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/users';

class Navigation extends Component {
  componentDidMount() {
    axios.get(url).then(res => this.props.loadData(res.data));
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  users: state.UsersReducer.users
});

const mapDispatchToProps = dispatch => ({
  loadData: data => dispatch({ type: 'INITIAL_LOAD', data: data })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
