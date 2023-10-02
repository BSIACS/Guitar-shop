/* eslint-disable no-console */
const AUTH_TOKEN_KEY_NAME = 'SIX_CITIES_X_TOKEN';

export type Token = string;

export const setToken = (token: Token) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
