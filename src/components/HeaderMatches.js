import React from "react";
import styled from "styled-components";
import IconAstromatch from "../img/astromatch.svg";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Nav = styled.div`
  display: flex;
  border-bottom: 1px solid #d3d3d3;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  width: 100%;
  height: 44px;
`;

const EspaceBlank = styled.div`
  width: 50px;
  height: 50px;
`;

export default function HeaderMatches(props) {
  return (
    <Nav>
      <IconButton
        aria-label="voltar"
        color="primary"
        size="large"
        onClick={props.goToHome}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <img
        src={IconAstromatch}
        onClick={props.goToHome}
        alt="logo astromatch"
      />
      <div>
        <EspaceBlank></EspaceBlank>
      </div>
    </Nav>
  );
}
