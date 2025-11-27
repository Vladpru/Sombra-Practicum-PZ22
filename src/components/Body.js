import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/vlad.jpg"} alt="Владислав Присяжнюк" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Владислав Присяжнюк</h2>
          <p style={styles.position}>Software engineer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img
          src={"/dima.jpg"}
          alt="Дмитро Антончик"
          style={styles.photo}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Дмитро Антончик</h2>
          <p style={styles.position}>UI/UX Designer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img
          src={"/avatar-default.png"}
          alt="Владислав Присяжнюк"
          style={styles.photo}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Владислав Присяжнюк</h2>
          <p style={styles.position}>QA Engineer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img
          src={"/avatar-default.png"}
          alt="Владислав Присяжнюк"
          style={styles.photo}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Владислав Присяжнюк</h2>
          <p style={styles.position}>Project Manager</p>
        </div>
      </div>
      <div style={styles.card}>
        <img
          src={"/Bohdan.jpg"}
          alt="Богдан Корнацький"
          style={styles.photo}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Богдан Корнацький</h2>
          <p style={styles.position}>Business Analyst</p>
        </div>
      </div>
      <div style={styles.card}>
        <img
          src={"/Liza.jpg"}
          alt="Єлизавета Ясінська"
          style={styles.photo}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Єлизавета Ясінська</h2>
          <p style={styles.position}>Project Manager</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    marginTop: "50px",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  card: {
    width: "200px",
    padding: "1em",
    borderRadius: "15px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "180px",
    height: "180px",
    borderRadius: "50px",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "18px",
    color: "#34a743ff",
    margin: "0.5em 0 0 0",
  },
};

export default Body;
