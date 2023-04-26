import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <section className="section">
      <NavLink to="/">Home</NavLink>/{title}
    </section>
  );
};



export default PageNavigation;
