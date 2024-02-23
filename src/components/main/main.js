import { useMemo, useState } from "react";
import MainItem from "../main-item/main-item";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Winner = styled.div`
  gap: 40px;
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 50px;
  border: 1px solid #000;
  border-radius: 10px;
  height: 30px;
  width: 100%;
  transition: all 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }
`;



const emoji = ["🐱", "🐶", "🐭", "🐹", "🐰"];

function Main() {
  const [votes, setVotes] = useState(Array(emoji.length).fill(0));
  const [showResults, setShowResults] = useState(false);

  const voteForEmoji = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  const calculateWinner = useMemo(() => {
    const maxVotes = Math.max(...votes);
    const winningIndex = votes.indexOf(maxVotes);
    return emoji[winningIndex]; 
  }, [votes]); 


  return (
    <Div>
      {emoji.map((item, index) => (
        <MainItem img={item} key={index} onClick={() => voteForEmoji(index)}/>
      ))}
      <Winner>
        <Button onClick={() => setShowResults(true)}>Show Results</Button>
        {showResults && <div>Winner: <p style={{fontSize: '40px'}}>{calculateWinner}</p></div>}
      </Winner>
    </Div>
  );
}

export default Main;
