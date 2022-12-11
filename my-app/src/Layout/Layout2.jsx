import React from "react";
import Footer from "../components/CommonComponent/Footer";
import Header from "../components/CommonComponent/Header";
import styled from "styled-components";
import Sidebar from "../components/CommonComponent/Sidebar";
import MainZone from "../components/CommonComponent/MainZone";
import { Outlet } from "react-router-dom";

const StyledWrapper = styled.div`
  background-color: red;
`;
const Layout2 = ({ children }) => {
  return (
    <StyledWrapper>
      <Sidebar />
      {/* <MainZone children={children} /> */}
      <Outlet context={children} />
    </StyledWrapper>
  );
};

export default Layout2;
