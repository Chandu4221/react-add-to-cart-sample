import React, { Component } from 'react';
import CartSingleUser from './CartSingleUser';

class CartUserList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          {this.props.users.map(user => (
            <CartSingleUser user={user} key={user.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default CartUserList;
