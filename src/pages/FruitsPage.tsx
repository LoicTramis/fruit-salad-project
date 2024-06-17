import React from "react";
import { Link } from "react-router-dom";
import Aside from "../components/Aside/Aside";

const FruitsPage = () => {
  return (
    <div className="content-page">
      <Aside />
      <main className="main-content">
        FruitsPage <Link to={"/fruits/2"}>2</Link>
      </main>
    </div>
  );
};

export default FruitsPage;
