import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import styled from "styled-components";

const SiteContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 90%;
`;

function App() {
  return (
    <SiteContainer>
      <Content>
        <Header />
        <Main />
      </Content>

      <Aside />
    </SiteContainer>
  );
}

export default App;
