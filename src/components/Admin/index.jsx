import React from "react";
import fire from "../../config/base";
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet";

function AdminPanel() {
  const logout = () => {
    fire.auth().signOut().then(console.log("Signed Out"));
  };

  const styles = {
    position: "absolute",
    top: 20,
    right: 20,
    width: "auto",
    height: "auto",
  };
  return (
    <div className="align-items-center" style={{ height: "100%" }}>
      <Helmet>
        <title>Console | LemonCo</title>
      </Helmet>
      <h1
        style={{
          left: 0,
          marginTop: -100,
          position: "absolute",
          textAlign: "center",
          top: "50%",
          width: "100%",
        }}
      >
        Hello Bros!
      </h1>
      <button
        data-testid="logout-btn"
        className="btn btn-danger"
        style={styles}
        onClick={logout}
      >
        Sign Out!
      </button>
    </div>
  );
}
export default AdminPanel;
