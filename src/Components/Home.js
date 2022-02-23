import React from "react";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
import allPaths from "../Config/path";

const Home = (props) => {
  return (
    <div>
      <h1>This is home page</h1>
      <Button type='primary'>
        <Link to={allPaths.LOGIN}>LogOut</Link>
      </Button>
    </div>
  );
};
export default Home;
