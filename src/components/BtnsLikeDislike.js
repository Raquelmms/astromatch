import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
//import ThumbDownIcon from "@mui/icons-material/ThumbDown";
//import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CancelIcon from '@mui/icons-material/Cancel';

const ContentBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function BtnsLikeDislike(props) {
  return (
    <ContentBtns>
      <div>
        <IconButton
          aria-label="dislike"
          color="error"
          size="large"
          onClick={props.dislikeBtn}
        >
          <CancelIcon />
        </IconButton>
      </div>

      <div>
        <IconButton
          aria-label="like"
          color="success"
          size="large"
          onClick={props.likeBtn}
        >
          <FavoriteIcon />
        </IconButton>
      </div>
    </ContentBtns>
  );
}
