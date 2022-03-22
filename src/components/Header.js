import React from "react";
import styled from "styled-components";
import IconAstromatch from "../img/astromatch.svg";
import PeopleIcon from "@mui/icons-material/People";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";

const Nav = styled.div`
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  
  width: 100%;
  height: 44px;
`

export default function Header(props) {
  return (
    <Nav>
      <div>
        <IconButton
          aria-label="matches"
          color="primary"
          size="large"
          onClick={props.cleanup}
        >
          <RefreshIcon />
        </IconButton>
      </div>
      <img src={IconAstromatch} onClick={props.goToHome} alt="astromatch" />

      <IconButton
        aria-label="matches"
        color="secondary"
        size="large"
        onClick={props.goToMatches}
      >
        <PeopleIcon />
      </IconButton>
    </Nav>
  );
}
