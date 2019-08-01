import React from 'react';
import { connect } from 'react-redux';

const SingleUser = ({ user, addToCart }) => {
  return (
    <div className="card my-1">
      <div className="card-header">{user.id}</div>
      <div className="card-body p-2">
        {user.name}
        <div>
          <button
            className="btn btn-primary mt-4"
            onClick={() => addToCart(user)}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: data => dispatch({ type: 'ADD_TO_CART', data: data })
});

export default connect(
  null,
  mapDispatchToProps
)(SingleUser);
