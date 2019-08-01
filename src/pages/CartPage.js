import React from 'react';
import { connect } from 'react-redux';
import CartUsersList from '../components/CartUsersList';
const CartPage = props => {
  console.log(props.users);
  return (
    <div className="row">
      <div className="col-md-12">
        <CartUsersList users={props.users} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.CartReducer.cart
});

export default connect(
  mapStateToProps,
  null
)(CartPage);
