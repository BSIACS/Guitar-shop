import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../types/authorization-status.enum';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthorizationStatus } from '../../store/selectors/selectors';

type PrivateRouteComponentProps = {
  /**
   * Authorization status
   */
  children: JSX.Element;
}

/**
 * Provide private access to a child component, requiring authorization
 * @param { PrivateComponentProps } props props for the component.
 * @returns JSX element, if authorization status is 'authorized'. Or redirect to login screen otherwise.
 */
export function PrivateRouteComponent({children} : PrivateRouteComponentProps) : JSX.Element{
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.AUTH ? children : <Navigate to={'/'}/>;
}
