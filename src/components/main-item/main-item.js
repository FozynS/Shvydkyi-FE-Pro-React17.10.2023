import { useState } from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 40px;
`;

const Button = styled.button`
  border: 1px solid #000;
  border-radius: 10px;
  margin-top: 20px;
  width: 70px;
  height: 30px;
  padding: 0;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(0.8);
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MainItem({ img }) {
  const [state, setState] = useState(0);

  const counter = () => {
    setState(state + 1);
  };

  return (
    <div>
      <Div>
        <P>{img}</P>
        <span>{state}</span>
      </Div>
      <Button onClick={counter}>+++</Button>
    </div>
  );
}

export default MainItem;
