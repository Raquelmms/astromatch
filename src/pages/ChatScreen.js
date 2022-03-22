import HeaderMatches from "../components/HeaderMatches";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Content = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
  width: 400px;
  height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1% 0.5% 1%;
`;

const ContentInputBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 5px 5px 5px;

`;

const ChatBox = styled.div`
  border-radius: 8px;
  background-color: #c9ebd7;

  display: flex;
  align-self: flex-end;
  flex-direction: column;

  word-wrap: break-word;
  max-width: 60%;
  min-width: 8%;
  margin: 0.3rem 0.3rem;

  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;

  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

`;
const ChatContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  overflow:scroll;
  overflow-x:hidden;
`;
function ChatScreen(props) {
  const [inputValue, setInputValue] = useState("");

  const [mensagens, setMensagens] = useState([]);

  const onChangeMensagem = (event) => {
    setInputValue(event.target.value);
  };
  const toSendMsg = (mensagem) => {
    const listMensagens = [...mensagens, mensagem];
    setMensagens(listMensagens);
    setInputValue("");
  };

  const mensagensRenderizadas = mensagens.map((mensagem) => {
    return (
      <ChatBox>
        <p>{mensagem}</p>
      </ChatBox>
    );
  });

  return (
    <Content>
      <HeaderMatches goToHome={props.goToHome} />

      <ChatContainer>{mensagensRenderizadas}</ChatContainer>

      <ContentInputBtn>
      
        <TextField
          id="fullWidth"
          fullWidth
          label="Mensagem" 
          //placeholder="Mensagem"
          value={inputValue}
          onChange={onChangeMensagem}
        />
        <IconButton
          aria-label="dislike"
          color="success"
          size="large"
          onClick={() => toSendMsg(inputValue)}
        >
          <SendIcon />
        </IconButton>
      </ContentInputBtn>
    </Content>
  );
}

export default ChatScreen;
