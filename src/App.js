import { useState } from 'react';
import styled from 'styled-components';
import  InitialScreen  from './pages/InitialScreen';
import MatchesScreen from './pages/MatchesScreen';
import ChatScreen from './pages/ChatScreen'

const DivBody = styled.div`
  //box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height: 100vh;
`;

const  CardPhone = styled.div`
width: 400px;
height: 600px;
border-radius: 8px;
`

function App() {
  const [currentScreen , setCurrentScreen] = useState("initial")

  const goToHome = () => {
    setCurrentScreen("initial");
  };

  const goToMatches = () => {
    setCurrentScreen("matches")
  }

  const goToChat = (id) => {
    setCurrentScreen("chat")
  }
  const chooseScreen = () => {
    switch (currentScreen) {
      case "initial":
        return (
          <InitialScreen goToMatches={() => goToMatches()}/>
        );
      case "matches":
        return (
         <MatchesScreen goToHome={()=> goToHome()} goToChat={()=> goToChat()}/> 
        );
        case "chat":
          return(
            <ChatScreen goToHome={()=> goToHome()} />
          )
      default:
        return (
          <InitialScreen />
        );
    }
  };

  
  return (

<DivBody>
  <CardPhone>
  {chooseScreen()}
  </CardPhone>
</DivBody>

  
      
    
  );
}

export default App;
