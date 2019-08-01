import React, { Component } from 'react';
import UsersList from '../components/UsersList';
import { connect } from 'react-redux';
class UserPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <UsersList users={this.props.users} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.UsersReducer.users
});

export default connect(
  mapStateToProps,
  null
)(UserPage);
