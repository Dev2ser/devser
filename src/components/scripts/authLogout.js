import fire from './../../config/Fire'

const Logout = () => {
  fire.auth().signOut()
}

export default Logout
