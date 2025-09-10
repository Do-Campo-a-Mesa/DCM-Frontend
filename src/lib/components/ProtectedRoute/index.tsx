import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
//import { routerPermission } from '../../config/permissionConfig';
//import { notificationState } from '../../store/reducers/notification';
import { UserObj } from '../../interfaces/User';
import { RootState } from '../../store';

interface Props {
  children: React.ReactNode;
  user?: UserObj;
}

const ProtectedRoute: React.FC<Props> = ({ children, user }) => {
  console.log(user);
  return user?.id !== '' ? <>{children}</> : <Navigate to="/" replace />;
};

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const ConnectedProtectedRoute = connect(mapStateToProps)(ProtectedRoute);

export default ConnectedProtectedRoute;
