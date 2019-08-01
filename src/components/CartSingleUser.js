import React from 'react';

const CartSingleUser = ({ user }) => {
  return (
    <div className="card my-1">
      <div className="card-header">
        {user.id}{' '}
        <span className="badge badge-primary">{`Quantity - ${
          user.quantity
        }`}</span>
      </div>
      <div className="card-body p-2">{user.name}</div>
    </div>
  );
};

export default CartSingleUser;
