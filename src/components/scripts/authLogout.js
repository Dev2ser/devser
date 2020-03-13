import fire from ''

const Logout = () => {
  fire.auth().signOut()
}

export default Logout
