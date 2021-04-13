import { auth } from '../config/base';
import { isEmpty } from './Helpers';

export const Logout = () => {
  auth.signOut();
};

export const getUser = () => {
  return auth.currentUser;
};

export const checkIfValidUser = (user) => {
  const valid = isEmpty(user);
  if (valid) {
    return true;
  } else {
    return false;
  }
};
