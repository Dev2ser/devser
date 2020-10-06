import { auth } from '../config/base';

export const Logout = () => {
  auth.signOut();
};

export const getUser = () => {
  return auth.currentUser;
};
