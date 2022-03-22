import React from "react";
import ActionAreaCard from "../components/ActionAreaCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import BtnsLikeDislike from "../components/BtnsLikeDislike";


const Content = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
`;

function InitialScreen(props) {
  const [profiles, setProfiles] = useState([]);
  const [id, setId] = useState("");
  const [choice, setChoice] = useState(false);

  useEffect(() => getProfileToChoose(), [id]);

  const getProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel-martins/person`
      )
      .then((response) => {
        setProfiles(response.data.profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const choosePerson = (profileId) => {
    const body = {
      id: id,
      choice: choice,
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel-martins/choose-person`,
        body
      )
      .then((response) => {
        setId(profileId);
        setChoice(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dontChoosePerson = (profileId) => {
    const body = {
      id: id,
      choice: choice,
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel-martins/choose-person`,
        body
      )
      .then((response) => {
        setId(profileId);
        setChoice(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearMatches = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel-martins/clear`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Content>
      <Header
        cleanup={() => clearMatches()}
        goToHome={props.goToHome}
        goToMatches={props.goToMatches}
      />
      
        <ActionAreaCard 
          photo={profiles.photo}
          name={profiles.name}
          age={profiles.age}
          bio={profiles.bio}

        />

        <BtnsLikeDislike
        dislikeBtn={() => dontChoosePerson(profiles.id)}
        likeBtn={() => choosePerson(profiles.id)}
        
        />
    
    </Content>
  );
}

export default InitialScreen;
