import React from "react";
import styled from "styled-components";

const BgContent = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: end;
  -webkit-align-self: end;
  padding: 0 0.5rem 0.5rem 0.5rem;
  color: white;
  font-weight: 600;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  width: 100%;
  width: 400px;
  text-shadow: 2px 2px 5px #000000;
`;

const Body = styled.div`
  box-shadow: rgb(117 117 117 / 20%) 0px 2px 10px 0px;
  width: 400px;
  height: 500px;
  display: flex;
  max-width: 100vw;
`;

export default function ActionAreaCard(props) {
  return (
    <Body>
      {props.photo ? (
        <BgContent style={{ backgroundImage: `url(${props.photo})` }}>
          <TextContent>
            <div>
              <h2>
                {props.name}, {props.age}
              </h2>
            </div>
            <div>{props.bio}</div>
          </TextContent>
        </BgContent>
      ) : (
        <div className="ui active inverted dimmer">
          <div className="ui small text loader">Buscando...</div>
        </div>
      )}
    </Body>
  );
}
