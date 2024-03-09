import React from "react";
import { Img } from ".."; // Import your custom components
import { Menu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div
      width="252px"
      collapsedWidth="80px"
      className="h-screen top-0 bg-white-A700 !sticky overflow-auto"
    >
      <Img
        src="../images/img_logo.png"
        alt="logo"
        className="w-[65%] mt-[30px] mx-auto object-cover"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: "17px 39px",
            gap: "20px",
            color: "#888ea2",
            fontWeight: 500,
            fontSize: "18px",
            "&:hover, &.ps-active": { color: "#314ca3" },
          },
        }}
        className="flex flex-col items-center justify-start w-full mt-[50px] mb-[364px]"
      >
        <div style={{ display: "flex", alignItems: "center", margin: "5%" }}>
          <span>
            <Img
              src="../images/img_vector.svg"
              alt="vector"
              className="h-[25px] w-[25px]"
            />
          </span>
          <Link to="/" className="text-right ml-2">
            <h2>Dashboard</h2>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "5%" }}>
          <span>
            <Img
              src="../images/img_glyph.svg"
              alt="glyph"
              className="h-[25px] w-[25px]"
            />
          </span>
          <Link to="/transaction" className="text-right ml-2">
            <h2>Transaction</h2>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "5%" }}>
          <div>
            <Img
              src="../images/img_user_3_1.svg"
              alt="user3one"
              className="h-[25px] w-[25px]"
            />
          </div>
          <Link to="/accounts" className="text-right ml-2">
            <h2>Accounts</h2>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "5%" }}>
          <div>
            <Img
              src="../images/img_group.svg"
              alt="image"
              className="h-[25px] w-[25px]"
            />
          </div>
          <Link to="/investments" className="text-right ml-2">
            <h2>Investments</h2>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "5%" }}>
          <div>
            <Img
              src="../images/img_credit_card_1.svg"
              alt="creditcard"
              className="h-[25px] w-[25px]"
            />
          </div>
          <Link to="/creditcards" className="text-right ml-2">
            <h2>Credit Cards</h2>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "5%" }}>
          <div>
            <Img
              src="../images/img_loan_1.svg"
              alt="loanone"
              className="h-[25px] w-[25px]"
            />
          </div>
          <Link to="/loans" className="text-right ml-2">
            <h2>Loans</h2>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "5%" }}>
          <div>
            <Img
              src="../images/img_service_1.svg"
              alt="serviceone"
              className="h-[25px] w-[25px]"
            />
          </div>
          <Link to="/services" className="text-right ml-2">
            <h2>Services</h2>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "5%" }}>
          <div>
            <Img
              src="../images/img_econometrics_1.svg"
              alt="econometrics"
              className="h-[25px] w-[25px]"
            />
          </div>
          <Link to="/accounts" className="text-right ml-2">
            <h2>My Privileges</h2>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "5%" }}>
          <div>
            <Img
              src="../images/img_vector_blue_gray_400.svg"
              alt="vector"
              className="h-[25px] w-[25px]"
            />
          </div>
          <Link to="/settings" className="text-right ml-2">
            <h2>Setting</h2>
          </Link>
        </div>
      </Menu>
    </div>
  );
};
export default Sidebar;
