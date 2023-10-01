import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../types/authorization-status.enum';

type PrivateRouteComponentProps = {
  /**
   * Authorization status
   */
  authStatus: AuthorizationStatus;
  children: JSX.Element;
}

/**
 * Provide private access to a child component, requiring authorization
 * @param { PrivateComponentProps } props props for the component.
 * @returns JSX element, if authorization status is 'authorized'. Or redirect to login screen otherwise.
 */
export function PrivateRouteComponent({authStatus, children} : PrivateRouteComponentProps) : JSX.Element{
  if(authStatus === AuthorizationStatus.UNAUTH || authStatus === AuthorizationStatus.UNDEFINED){
    return (
      <Navigate to="/login"></Navigate>
    );
  }
  else{
    return (
      children
    );
  }
}
