import React from "react";
import type { NextPage } from "next";
import Main from "../components/main";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <div className="content-center px-1 mx-1">
        <div className="markdown-body">
          <Main />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
