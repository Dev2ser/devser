import fire from '../config/base';

const AuthLogout = () => {
  fire.auth().signOut();
};

export const Logout = AuthLogout;
