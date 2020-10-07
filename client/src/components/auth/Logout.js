import React, { Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { logout } from '../../actions/authActions';
import { useDispatch } from 'react-redux';

export const Logout = () => {
  const dispatch = useDispatch();

  const performLogout = () => {
    dispatch(logout());
  };

  return (
    <Fragment>
      <NavLink onClick={performLogout}>Logout</NavLink>
    </Fragment>
  );
};

export default Logout;
