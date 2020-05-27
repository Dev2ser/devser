import fire from "./../../config/base";

const Logout = () => {
  fire.auth().signOut();
};

export default Logout;
