import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MainDashboard from "pages/MainDashboard/MainDashboard";
import Transaction from "pages/Transaction/Transaction";
import Accounts from "pages/Accounts/Accounts";
import Investments from "pages/Investments/Investments";
import CreditCards from "pages/CreditCards/CreditCards";
import Layout from "./layout";
import LoanPage from "pages/Loan/Loan";
import ServicesPage from "pages/Services/Services";
import SettingEditProfilePage from "pages/SettingEditProfile/SettingEditProfile";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <MainDashboard />,
    },
    {
      path: "transaction",
      element: <Transaction />,
    },
    {
      path: "accounts",
      element: <Accounts />,
    },
    {
      path: "investments",
      element: <Investments />,
    },
    {
      path: "creditcards",
      element: <CreditCards />,
    },
    {
      path: "loans",
      element: <LoanPage />,
    },

    {
      path: "services",
      element: <ServicesPage />,
    },

    {
      path: "settings",
      element: <SettingEditProfilePage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
