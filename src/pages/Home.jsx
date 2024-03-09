import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>

      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
            MainDashboard
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/transaction"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Transaction
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/accounts"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Accounts
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/investments"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Investments
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/creditcards"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            CreditCards
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
