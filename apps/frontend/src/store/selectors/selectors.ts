import { AuthorizationStatus } from '../../types/authorization-status.enum';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state.authorization.authorizationStatus;
