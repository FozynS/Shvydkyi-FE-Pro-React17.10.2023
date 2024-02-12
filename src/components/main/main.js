import MainItem from "../main-item/main-item";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

const emoji = ["🐱", "🐶", "🐭", "🐹", "🐰"];

function Main() {

  return (
    <Div>
      {emoji.map((item, index) => (
        <MainItem img={item} key={index} />
      ))}
    </Div>
  );
}

export default Main;
