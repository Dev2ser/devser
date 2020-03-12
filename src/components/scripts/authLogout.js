import fire from "C:/Users/robow_000/Documents/Projects/edu_projects/src/config/Fire.js";

const Logout = () => {
  fire.auth().signOut();
};

export default Logout;
