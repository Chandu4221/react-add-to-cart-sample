import React, { Component } from 'react';
import SingleUser from './SingleUser';

class UserList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          {this.props.users.map(user => (
            <SingleUser user={user} key={user.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
