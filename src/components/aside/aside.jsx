import styled from "styled-components";
import AsideItem from "../aside-item/aside-item";

const filters = ["fox", "cats", "dogs", "bear", "deer"];

const AsideDiv = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-basis: 10%;
  align-items: flex-start;
  padding: 1em;
  height: 15em;
  width: 10%;
  border: 2px solid #c2c2c2;
`;

function Aside() {
  return (
    <AsideDiv>
      {filters.map((item) => (
        <AsideItem theme={item} key={Math.random()} />
      ))}
    </AsideDiv>
  );
}

export default Aside;
