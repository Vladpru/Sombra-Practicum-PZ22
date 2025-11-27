import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My dream team</h1>
    </header>
  );
};

const styles = {
  header: {
    paddingTop: "8px",
    color: "#091c41ff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "32px",
  },
};

export default Header;
